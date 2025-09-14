"use client";
import playlistService from "@/app/api/services/playlistsService";
import { CreatePlaylistData } from "@/app/api/services/utils/playlistTypes";
import { pushPlaylist } from "@/app/store/slices/playlistSlice";
import { Playlist } from "@/app/types/User";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function CreatePlaylistForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setThumbnail(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setThumbnail(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!thumbnail) {
      alert("Iltimos sarlavha rasmini joylang");
      return;
    }

    const data: CreatePlaylistData = {
      title,
      description,
      thumbnail,
    };

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("file", data.thumbnail);

    try {
      setLoading(true);
      const res: any = await playlistService.create(formData);
      console.log(res);
      const res_playlist: Playlist = res;
      console.log(res_playlist);
      dispatch(pushPlaylist(res_playlist));
      setLoading(false);
      alert("Playlist created!");
    } catch (error: any) {
      if (error.response && error.response.data) {
        setError(
          error.response.data.message ||
            "An error occurred while validating the password."
        );
      }
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 w-full">
      <h2 className="text-2xl font-semibold text-gray-800">
        Malumotlarni kiriting
      </h2>

      {/* Title */}
      <div className="w-full flex flex-col gap-2">
        <label className="block text-sm font-medium text-gray-900">
          Dars nomi*
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          maxLength={140}
          minLength={10}
          autoFocus
          className="global_input"
        />
        <p className="block text-sm font-medium text-gray-700">
          10 dan 140 tagacha harf ishlatish mumkin!
        </p>
      </div>

      {/* Description */}
      <div className="w-full flex flex-col gap-2">
        <label className="block text-sm font-medium text-gray-900">
          Darslar haqida*
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          minLength={50}
          maxLength={270}
          className="global_input resize-none"
        />
        <p className="block text-sm font-medium text-gray-700">
          50 dan 270 tagacha harf ishlatish mumkin!
        </p>
      </div>

      {/* Thumbnail Upload */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-gray-300 space-y-2 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-[#26a269] transition"
      >
        <label className="block text-sm font-medium text-gray-900">
          Dars sarlavha rasmi*
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="thumbnail"
        />
        <label htmlFor="thumbnail" className="cursor-pointer text-center">
          {preview ? (
            <img
              src={preview}
              alt="Thumbnail preview"
              className="w-full aspect-video object-cover rounded-xl mx-auto"
            />
          ) : (
            <div className="text-gray-500">
              Drag & Drop your thumbnail or{" "}
              <span className="text-blue-500 underline">Browse</span>
            </div>
          )}
        </label>
        <p className="block text-sm font-medium text-gray-700">
          rasm "16x9" formatida saqlanadi!
        </p>
      </div>

      <div className="w-full">
        {error !== "" && (
          <p className="text-red-600 bg-red-600/10 rounded-xl px-4 py-2 text-center">
            {error}
          </p>
        )}
      </div>

      <label className="block text-sm font-medium text-gray-900">
        Saqlang*
      </label>
      {/* Submit */}
      <button type="submit" className="basic_button w-full">
        {loading ? "yaratilmoqda..." : "Darslarni yaratish"}
      </button>
    </form>
  );
}
