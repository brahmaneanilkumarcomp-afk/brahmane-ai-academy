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

  // ============================================================
  // LOAD STATISTICS
  // ============================================================

  useEffect(() => {
    loadStats();
  }, [resourceId]);

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
      setViews(data.views ?? 0);
      setLikes(data.likes ?? 0);
      setDownloads(data.downloads ?? 0);
    }
  }

  // ============================================================
  // VIEW
  // ============================================================

  async function handleView() {
    const { error } = await supabase.rpc(
      "increment_resource_view",
      {
        resource_id: resourceId,
      }
    );

    if (error) {
      console.error("View count error:", error);
      return;
    }

    setViews((current) => current + 1);
  }

  // ============================================================
  // LIKE
  // ============================================================

  async function handleLike() {
    if (liked) return;

    const { error } = await supabase.rpc(
      "increment_resource_like",
      {
        resource_id: resourceId,
      }
    );

    if (error) {
      console.error("Like count error:", error);
      return;
    }

    setLikes((current) => current + 1);
    setLiked(true);
  }

  // ============================================================
  // DOWNLOAD
  // ============================================================

  async function handleDownload() {
    const { error } = await supabase.rpc(
      "increment_resource_download",
      {
        resource_id: resourceId,
      }
    );

    if (error) {
      console.error("Download count error:", error);
    } else {
      setDownloads((current) => current + 1);
    }

    // Open existing PDF
    window.open(resourceUrl, "_blank");
  }

  // ============================================================
  // UI
  // ============================================================

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3 text-sm">

      {/* VIEW */}

      <button
        onClick={handleView}
        className="
          text-gray-500
          hover:text-blue-600
          transition
          cursor-pointer
        "
        title="View resource"
      >
        👁 {views} Views
      </button>


      {/* LIKE */}

      <button
        onClick={handleLike}
        disabled={liked}
        className={`
          transition
          ${liked
            ? "text-red-600"
            : "text-gray-500 hover:text-red-600"
          }
          ${liked ? "cursor-default" : "cursor-pointer"}
        `}
        title={liked ? "You liked this resource" : "Like this resource"}
      >
        ❤️ {likes} Likes
      </button>


      {/* DOWNLOAD */}

      <button
        onClick={handleDownload}
        className="
          text-gray-500
          hover:text-green-600
          transition
          cursor-pointer
        "
        title="Download PDF"
      >
        ⬇ {downloads} Downloads
      </button>

    </div>
  );
}