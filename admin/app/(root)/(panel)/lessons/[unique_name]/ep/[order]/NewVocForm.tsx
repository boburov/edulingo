"use client";
import vocsService from "@/app/api/services/vocsService";
import { useContext, useState } from "react";
import { LessonContext } from "./layout";
import { Lesson, Voc } from "@/app/types/User";

export default function NewVocForm() {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { lesson, setLesson } = useContext(LessonContext);

  async function CreateNewVoc(e: any) {
    e.preventDefault();
    try {
      setLoading(true);
      const data = {
        word,
        translation,
      };
      const res: any = await vocsService.create(lesson.id, data);
      const voc: Voc = res;
      setLesson((prev: Lesson) => ({
        ...prev,
        vocabulary: [...prev.vocabulary, voc],
      }));
      setWord("");
      setTranslation("");
      setSuccess("Lugatga yangi so'z qo'shildi");
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
    <form className="w-full space-y-5" onSubmit={CreateNewVoc}>
      {error && (
        <p className="text-red-600 bg-red-50 rounded-xl px-4 py-2 text-center">
          {error}
        </p>
      )}
      {success && (
        <p className="text-green-600 bg-green-50 rounded-xl px-4 py-2 text-center">
          {success}
        </p>
      )}
      <div className="flex justify-between items-center gap-5">
        <div className="space-y-1 flex flex-col flex-1">
          <label htmlFor="word">So'z</label>
          <input
            type="text"
            name="word"
            id="word"
            required
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="global_input"
          />
        </div>
        <div className="space-y-1 flex flex-col flex-1">
          <label htmlFor="translation">Tarjimasi</label>
          <input
            type="text"
            name="translation"
            id="translation"
            required
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
            className="global_input"
          />
        </div>
      </div>
      <button className="basic_button">
        {loading ? "Qo'shilmoqda..." : "So'zni qo'shish"}
      </button>
    </form>
  );
}
