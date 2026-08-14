"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface ResourceStatsProps {
  resourceId: number;
  resourceUrl: string;
}

export default function ResourceStats({
  resourceId,
  resourceUrl,
}: ResourceStatsProps) {
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    loadStats();

    // Create a unique key for this resource
    const viewKey = `resource_viewed_${resourceId}`;

    // Check whether this resource has already been viewed
    // during the current browser session.
    const alreadyViewed = sessionStorage.getItem(viewKey);

    if (!alreadyViewed) {
      // Mark it immediately before calling Supabase.
      // This prevents duplicate calls caused by React Strict Mode.
      sessionStorage.setItem(viewKey, "true");

      incrementView(viewKey);
    }
  }, [resourceId]);

  // --------------------------------------------------
  // LOAD CURRENT STATISTICS
  // --------------------------------------------------

  async function loadStats() {
    const { data, error } = await supabase
      .from("resources")
      .select("views, likes, downloads")
      .eq("id", resourceId)
      .single();

    if (error) {
      console.error("Error loading resource statistics:", error);
      return;
    }

    if (data) {
      setViews(data.views);
      setLikes(data.likes);
      setDownloads(data.downloads);
    }
  }

  // --------------------------------------------------
  // INCREMENT VIEW - ONLY ONCE PER SESSION
  // --------------------------------------------------

  async function incrementView(viewKey: string) {
    const { error } = await supabase.rpc(
      "increment_resource_view",
      {
        resource_id: resourceId,
      }
    );

    if (error) {
      console.error("Error incrementing resource view:", error);

      // If the database update failed,
      // remove the session marker so it can be tried again.
      sessionStorage.removeItem(viewKey);

      return;
    }

    // Update the displayed number immediately.
    setViews((current) => current + 1);
  }

  // --------------------------------------------------
  // LIKE
  // --------------------------------------------------

  async function handleLike() {
    if (liked) return;

    const { error } = await supabase.rpc(
      "increment_resource_like",
      {
        resource_id: resourceId,
      }
    );

    if (error) {
      console.error("Error liking resource:", error);
      return;
    }

    setLikes((current) => current + 1);
    setLiked(true);
  }

  // --------------------------------------------------
  // DOWNLOAD
  // --------------------------------------------------

  async function handleDownload() {
    const { error } = await supabase.rpc(
      "increment_resource_download",
      {
        resource_id: resourceId,
      }
    );

    if (error) {
      console.error(
        "Error incrementing download count:",
        error
      );
    } else {
      setDownloads((current) => current + 1);
    }

    // Open the existing PDF
    window.open(resourceUrl, "_blank");
  }

  // --------------------------------------------------
  // DISPLAY
  // --------------------------------------------------

  return (
    <div className="flex items-center gap-5 mt-3 text-sm">

      {/* VIEW */}

      <span
        className="text-gray-500"
        title="Number of times this resource has been viewed"
      >
        👁 {views} Views
      </span>

      {/* LIKE */}

      <button
        onClick={handleLike}
        disabled={liked}
        className={`transition ${
          liked
            ? "text-red-600"
            : "text-gray-500 hover:text-red-600"
        }`}
        title="Like this resource"
      >
        ❤️ {likes} Likes
      </button>

      {/* DOWNLOAD */}

      <button
        onClick={handleDownload}
        className="text-gray-500 hover:text-green-600 transition"
        title="Download / Open PDF"
      >
        ⬇ {downloads} Downloads
      </button>

    </div>
  );
}