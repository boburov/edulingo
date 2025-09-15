import { Playlist } from "@/app/types/User";
import Image from "next/image";

export default function PlaylistDetails({ playlist }: { playlist: Playlist }) {
  return (
    <div className=" max-w-sm w-full rounded-xl p-4 border border-gray-300 shadow-md space-y-3">
      <div className="w-full aspect-video bg-gray-300 rounded-lg overflow-hidden shadow-md border border-gray-300">
        <img
          src={playlist.thumbnail}
          alt={playlist.title}
          className="w-full h-full aspect-square object-center"
        />
      </div>
      <div className="space-y-1">
        <p className="text-xl font-semibold text_color">{playlist.title}</p>
        <p className="text_color">{playlist.description}</p>
        <span className="text_">
          {new Date(playlist.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>
    </div>
  );
}
