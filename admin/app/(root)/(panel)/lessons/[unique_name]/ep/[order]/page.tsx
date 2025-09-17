"use client";
import Heading from "@/app/(global_components)/Heading";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { GlobalContext } from "../../layout";
import { Lesson } from "@/app/types/User";
import PageMessage from "@/app/(global_components)/PageMessage";
import VocManager from "./Vacabluarymanager";

export default function LessonDetails() {
  const { order } = useParams();
  const { playlist } = useContext(GlobalContext);
  const lessons: Lesson[] = playlist.lessons;

  const lesson = lessons.find((le) => le.order === Number(order));
  return (
    <div className="space-y-5">
      <Heading>Seriya #{order}</Heading>
      {lesson ? (
        <div className="space-y-4">
          <div className="w-full aspect-video rounded-xl bg-gray-300 overflow-hidden">
            <iframe
              width="560"
              height="315"
              src={lesson.video_url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-2 space-y-1">
            <h2 className="text-xl text-gray-950 font-semibold">
              {lesson.title}
            </h2>
            <p className="text_color">{lesson.description}</p>
            <span className="text-sm text-gray-600">
              {new Date(lesson.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
          <VocManager lesson={lesson} />
        </div>
      ) : (
        <div className="py-10">
          <PageMessage title="Seriya topilmadi" message="Orqaga qayting!" />
        </div>
      )}
    </div>
  );
}
