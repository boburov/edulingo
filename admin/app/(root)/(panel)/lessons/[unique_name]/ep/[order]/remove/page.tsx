"use client";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../layout";
import { LessonContext } from "../layout";
import Heading from "@/app/(global_components)/Heading";
import Link from "next/link";
import { useRouter } from "next/navigation";
import lessonService from "@/app/api/services/lessonService";
import { Playlist } from "@/app/types/User";

export default function removeLessonPage() {
  const { playlist, setPlaylist } = useContext(GlobalContext);
  const { lesson, current_link } = useContext(LessonContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function DeletePlaylist(e: any) {
    e.preventDefault();
    try {
      setLoading(true);
      const res: any = await lessonService.delete(
        playlist.unique_name,
        lesson.id
      );
      const resData: { deleted: boolean } = res;
      if (resData.deleted) {
        alert(
          "Seriya muaffaqiyatli ochirildi! Agar dars tartibida muammo bolayotgan bolsa sahifani yangilang!"
        );
        setPlaylist((prev: Playlist) => ({
          ...prev,
          lessons: prev.lessons.filter((l) => l.id !== lesson.id),
        }));
        router.push(`/lessons/${playlist.unique_name}`);
      }
    } catch (err: any) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Xatolik yuz berdi. Iltimos, qaytadan urinib ko‘ring.");
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="space-y-5">
      <Heading>
        #{lesson.order} raqamli seriyani olib tashlashga ishonchingiz komilmi?
      </Heading>
      <p className="text_color">
        Ushbu harakat Boshqa darslarni tartibi buzulishiga va Kurslarni sifatiga
        qattiq tasir qilishi mumkin, agar ishonchingiz komil bolmasa darsni
        tahrirlashingiz mumkun!
      </p>
      {/* Error */}
      {error && (
        <p className="text-red-600 bg-red-50 rounded-xl px-4 py-2 text-center">
          {error}
        </p>
      )}
      <div className="flex items-center gap-4">
        <Link href={current_link} className="basic_button2">
          Bekor qilish
        </Link>
        <button onClick={DeletePlaylist} className="basic_button3">
          {loading ? "Olib tashlanmoqda..." : "Olib Tashlash"}
        </button>
      </div>
    </div>
  );
}
