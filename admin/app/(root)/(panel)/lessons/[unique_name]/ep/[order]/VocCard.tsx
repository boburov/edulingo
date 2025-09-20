import Loader from "@/app/(global_components)/Loader";
import vocsService from "@/app/api/services/vocsService";
import { Lesson, Voc } from "@/app/types/User";
import { Trash2 } from "lucide-react";
import { useContext, useState } from "react";
import { LessonContext } from "./layout";

export default function VocCard({ voc, index }: { voc: Voc; index: number }) {
  const is_even = index % 2 !== 1;
  const [loading, setLoading] = useState(false);
  const { lesson, setLesson } = useContext(LessonContext);
  const [error, setError] = useState<null | string>(null);

  async function DeleteVoc() {
    try {
      setLoading(true);
      const res: any = await vocsService.delete(lesson.id, voc.id);
      const resData: { deleted: boolean } = res;
      if (resData.deleted) {
        setLesson((prev: Lesson) => ({
          ...prev,
          vocabulary: prev.vocabulary.filter((vc) => vc.id !== voc.id),
        }));
        alert("Darslar toplami olib tashlandi!");
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
    <>
      {error && (
        <p className="text-red-600 bg-red-50 rounded-xl px-4 py-2 text-center">
          {error}
        </p>
      )}
      <div
        className={`w-full flex items-center justify-between ${
          is_even && "bg-gray-200"
        }`}
      >
        <p className="p-2">{index}</p>
        <p className="p-2 flex-1">{voc.word}</p>
        <p className="p-2 flex-1">{voc.translation}</p>
        <button
          className={`p-2 ${
            loading ? "text-gray-700" : "text-red-500"
          } cursor-pointer`}
          onClick={DeleteVoc}
        >
          {!loading ? <Trash2 /> : <Loader />}
        </button>
      </div>
    </>
  );
}
