"use client";
import { Lesson, Voc } from "@/app/types/User";
import NewVocForm from "./NewVocForm";
import { useContext, useEffect, useState } from "react";
import vocsService from "@/app/api/services/vocsService";
import { LessonContext } from "./layout";
import Loader from "@/app/(global_components)/Loader";
import PageMessage from "@/app/(global_components)/PageMessage";
import VocCard from "./VocCard";

export default function VocManager() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const { lesson, setLesson } = useContext(LessonContext);

  async function GetVocs() {
    try {
      setLoading(true);
      const res: any = await vocsService.get(lesson.id);
      const vocs: Voc[] = res;
      console.log(vocs);
      setLesson((prev: Lesson) => ({
        ...prev,
        vocabulary: vocs,
      }));
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

  useEffect(() => {
    GetVocs();
  }, []);

  if (loading) {
    return (
      <div className="py-10 flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-red-600 bg-red-50 rounded-xl px-4 py-2 text-center">
        {error}
      </p>
    );
  }

  return (
    <>
      <div className="border-y border-gray-300 py-5 space-y-5">
        <p className="text-xl text-gray-800 font-semibold">Lugat</p>
        <div>
          <NewVocForm />
        </div>
      </div>
      <div className="w-full">
        {lesson.vocabulary && lesson.vocabulary.length > 0 ? (
          <div className="w-full">
            {lesson.vocabulary.map((voc: Voc, i: number) => (
              <VocCard voc={voc} index={i + 1} key={voc.id} />
            ))}
          </div>
        ) : (
          <div className="w-full py-10 flex items-center justify-center">
            <PageMessage
              title="Lugatlar hozircha yo'q"
              message="yangi yarating"
            />
          </div>
        )}
      </div>
    </>
  );
}
