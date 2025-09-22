"use client";
import { Roboto } from "next/font/google";
import "@/app/globals.css";
import { useContext, useState } from "react";
import { Lesson } from "@/app/types/User";
import { createContext } from "react";
import { GlobalContext } from "../../layout";
import { useParams } from "next/navigation";
import Heading from "@/app/(global_components)/Heading";

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

  const [lesson, setLesson] = useState<Lesson | undefined>(
    lessons.find((le) => le.order === Number(order))
  );

  return (
    <div className={`${roboto.className} antialiased w-full space-y-5`}>
      <div className="w-full flex items-center justify-between">
        <Heading>Seriya #{order}</Heading>
        <div>actions here</div>
      </div>
      <div className="w-full">
        <LessonContext.Provider value={{ lesson, setLesson }}>
          {children}
        </LessonContext.Provider>
      </div>
    </div>
  );
}
