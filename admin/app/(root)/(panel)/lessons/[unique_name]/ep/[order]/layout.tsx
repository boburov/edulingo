"use client";
import { Roboto } from "next/font/google";
import "@/app/globals.css";
import { useParams } from "next/navigation";
import Heading from "@/app/(global_components)/Heading";
import { useContext, useState } from "react";
import { Lesson } from "@/app/types/User";
import { createContext } from "react";
import PageMessage from "@/app/(global_components)/PageMessage";
import { GlobalContext } from "../../layout";
import Link from "next/link";
import { Edit } from "lucide-react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const LessonContext = createContext<any>(null);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { order } = useParams();
  const { playlist } = useContext(GlobalContext);
  const lessons: Lesson[] = playlist.lessons;
  const current_link = `/lessons/${playlist.unique_name}/ep/${order}`;

  const [lesson, setLesson] = useState<Lesson | undefined>(
    lessons.find((le: Lesson) => le.order === Number(order))
  );

  return (
    <div className={`${roboto.className} antialiased w-full space-y-5`}>
      <div className="flex justify-between items-center">
        <Link href={current_link}>
          <Heading>Seriya #{order}</Heading>
        </Link>
        <div>
          <Link href={current_link + "/update"} className="basic_button2">
            <Edit /> Tahrirlash
          </Link>
        </div>
      </div>
      {lesson ? (
        <div className="w-full">
          <LessonContext.Provider value={{ lesson, setLesson, current_link }}>
            {children}
          </LessonContext.Provider>
        </div>
      ) : (
        <div className="py-10">
          <PageMessage title="Seriya topilmadi" message="Orqaga qayting!" />
        </div>
      )}
    </div>
  );
}
