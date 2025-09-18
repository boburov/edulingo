import { useContext } from "react";
import { GlobalContext } from "./layout";
import { Lesson } from "@/app/types/User";
import PageMessage from "@/app/(global_components)/PageMessage";
import LessonCard from "./LessonCard";

export default function LessonsList() {
  const { playlist } = useContext(GlobalContext);
  const lessons: Lesson[] = playlist.lessons;
  const lessons_in_order = lessons.sort((a, b) => a.order - b.order);

  return (
    <div>
      {lessons.length > 0 ? (
        <div className="space-y-4">
          {lessons_in_order.map((l: Lesson) => (
            <LessonCard lesson={l} key={l.id} />
          ))}
        </div>
      ) : (
        <div className="py-10">
          <PageMessage
            title="Seriyalar hozircha yo'q"
            message="Yaratilgan seriyalar shu yerda saqlanadi!"
          />
        </div>
      )}
    </div>
  );
}
