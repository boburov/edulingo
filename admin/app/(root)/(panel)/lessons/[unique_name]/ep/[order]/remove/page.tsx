"use client";
import { useContext } from "react";
import { GlobalContext } from "../../../layout";
import { LessonContext } from "../layout";
import Heading from "@/app/(global_components)/Heading";
import Link from "next/link";

export default function removeLessonPage() {
  const { playlist } = useContext(GlobalContext);
  const { lesson, current_link } = useContext(LessonContext);
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
      <div className="flex items-center gap-4">
        <Link href={current_link} className="basic_button2">
          Bekor qilish
        </Link>
        <button className="basic_button3">
          Olib tashlash
        </button>
      </div>
    </div>
  );
}
