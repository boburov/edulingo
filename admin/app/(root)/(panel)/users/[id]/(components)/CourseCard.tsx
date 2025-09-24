"use client";
import Loader from "@/app/(global_components)/Loader";
import { Courses } from "@/app/types/User";
import { Minus } from "lucide-react";
import { useState } from "react";

export default function CourseCard({ course }: { course: Courses }) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex gap-4 p-4 rounded-xl items-center justify-center border border-gray-300 shadow-md">
      <div className="max-w-64 w-full">
        <p className="w-full truncate text-lg text_color font-semibold">
          {course.playlist.title}
        </p>
        <p className="w-full truncate text_color">
          {course.playlist.description}
        </p>
      </div>
      <div>
        <button className={`${loading ? "basic_button3" : "basic_button"}`}>
          {loading ? <Loader /> : <Minus />}
        </button>
      </div>
    </div>
  );
}
