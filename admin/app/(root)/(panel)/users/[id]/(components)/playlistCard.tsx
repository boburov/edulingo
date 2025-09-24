"use client";
import Loader from "@/app/(global_components)/Loader";
import { Playlist } from "@/app/types/User";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function PlaylistCards({ playlist }: { playlist: Playlist }) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex gap-4 p-4 rounded-xl items-center justify-center border border-gray-300 shadow-md">
      <div className="max-w-64 w-full">
        <p className="w-full truncate text-lg text_color font-semibold">
          {playlist.title}
        </p>
        <p className="w-full truncate text_color">{playlist.description}</p>
      </div>
      <div>
        <button className={`${loading ? "basic_button2" : "basic_button"}`}>
          {loading ? <Loader /> : <Plus />}
        </button>
      </div>
    </div>
  );
}
