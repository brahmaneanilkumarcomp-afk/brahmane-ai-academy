"use client";

import { supabase } from "@/lib/supabase";

interface ResourceLinkProps {
  resourceId: number;
  resourceUrl: string;
  title: string;
  className?: string;
}

export default function ResourceLink({
  resourceId,
  resourceUrl,
  title,
  className = "",
}: ResourceLinkProps) {

  async function handleClick() {
    console.log("CLICKED RESOURCE:", resourceId);

    const { data, error } = await supabase.rpc(
      "increment_resource_view",
      {
        p_resource_id: resourceId,
      }
    );

    console.log("RPC DATA:", data);
    console.log("RPC ERROR:", error);

    if (!error) {
      console.log("VIEW INCREMENTED:", resourceId);
    }

    window.open(resourceUrl, "_blank");
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`block text-left ${className}`}
    >
      {title}
    </button>
  );
}