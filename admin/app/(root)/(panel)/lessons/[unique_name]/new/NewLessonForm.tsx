"use client";

import playlistService from "@/app/api/services/playlistsService";
import { CreatePlaylistData } from "@/app/api/services/utils/playlistTypes";
import { pushPlaylist } from "@/app/store/slices/playlistSlice";
import { Playlist } from "@/app/types/User";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export default function NewLessonForm() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const validateForm = () => {
    if (!title || title.length < 10 || title.length > 140) {
      setError("Sarlavha 10 dan 140 ta belgigacha bo‘lishi kerak.");
      return false;
    }
    if (!description || description.length < 50 || description.length > 270) {
      setError("Tavsif 50 dan 270 ta belgigacha bo‘lishi kerak.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) return;

    const data: any = { title, description };
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("thumbnail", data.thumbnail);

    try {
      setLoading(true);
      const res: any = await playlistService.create(formData);
      const res_playlist: Playlist = res;
      dispatch(pushPlaylist(res_playlist));
      router.push(`/lessons/${res_playlist.unique_name}`);
    } catch (err: any) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Xatolik yuz berdi. Iltimos, qaytadan urinib ko‘ring.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <label className=" font-medium text-gray-900">Dars nomi*</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          maxLength={140}
          minLength={10}
          autoFocus
          className="global_input"
          placeholder="Masalan: Frontend asoslari"
        />
        <p className="text-gray-500">10–140 ta belgi ishlatish mumkin</p>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-2">
        <label className=" font-medium text-gray-900">Darslar haqida*</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          minLength={50}
          maxLength={270}
          className="global_input resize-none h-28"
          placeholder="Playlist tavsifi..."
        />
        <p className="text-gray-500">50–270 ta belgi ishlatish mumkin</p>
      </div>

      <label className="font-medium text-gray-900 flex">Saqlang*</label>

      {/* Error */}
      {error && (
        <p className="text-red-600 bg-red-50 rounded-xl px-4 py-2 text-center">
          {error}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        className="basic_button w-full disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? "Yaratilmoqda..." : "Playlistni yaratish"}
      </button>
    </form>
  );
}
