"use client";

import { RootState } from "@/app/store/store";
import {
  Bell,
  BookMarked,
  BookOpen,
  ClipboardList,
  LayoutDashboard,
  Menu,
  Plus,
  Settings,
  UserCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userId } = useParams();
  const user = useSelector((state: RootState) => state.user);

  return (
    <header className="border-b border-gray-200 text-gray-800">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="text-3xl font-extrabold font-mono text-black">
          edulingo
        </Link>

        <div className="flex items-center gap-10">
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600 font-medium">
              <li>
                <Link href="/courses" className="hover:text-black transition">
                  Kurslar
                </Link>
              </li>
              <li>
                <Link href="/teachers" className="hover:text-black transition">
                  O‘qituvchilar
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition">
                  Bog‘lanish
                </Link>
              </li>
            </ul>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="border border-gray-300 px-3 py-1.5 rounded-full flex items-center gap-2 hover:bg-gray-100 transition"
          >
            <Menu size={22} />
            <img
              className="w-6 h-6 rounded-full"
              src={user.profile_pic}
              alt={user.name}
            />
          </button>
        </div>

        <div
          className={`fixed top-0 right-0 h-screen bg-white shadow-2xl transition-all ease-in-out duration-300 ${
            isOpen ? "w-96" : "w-0"
          } overflow-hidden flex flex-col`}
        >
          <div className="flex justify-end p-5">
            <button onClick={() => setIsOpen(false)}>
              <Plus
                className="rotate-45 text-gray-500 hover:text-red-500 transition"
                size={28}
              />
            </button>
          </div>

          <nav className="flex-1 px-6">
            <ul className="space-y-6">
              <li>
                <Link
                  href={`/dashboard/${userId}`}
                  className="flex items-center gap-3 text-lg text-gray-700 hover:bg-gray-100 p-2 rounded-xl transition"
                >
                  <UserCircle size={22} /> Profile
                </Link>
              </li>
              <li>
                <Link
                  href={`/dashboard/${userId}`}
                  className="flex items-center gap-3 text-lg text-gray-700 hover:bg-gray-100 p-2 rounded-xl transition"
                >
                  <LayoutDashboard size={22} /> Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href={`${userId}/courses`}
                  className="flex items-center gap-3 text-lg text-gray-700 hover:bg-gray-100 p-2 rounded-xl transition"
                >
                  <BookOpen size={22} /> Kurslar
                </Link>
              </li>
              <li>
                <Link
                  href={`${userId}/quizzes`}
                  className="flex items-center gap-3 text-lg text-gray-700 hover:bg-gray-100 p-2 rounded-xl transition"
                >
                  <ClipboardList size={22} /> Savvolar
                </Link>
              </li>
              <li>
                <Link
                  href={`${userId}/sozlar`}
                  className="flex items-center gap-3 text-lg text-gray-700 hover:bg-gray-100 p-2 rounded-xl transition"
                >
                  <BookMarked size={22} /> Sozlar
                </Link>
              </li>
              <li>
                <Link
                  href={`${userId}/settings`}
                  className="flex items-center gap-3 text-lg text-gray-700 hover:bg-gray-100 p-2 rounded-xl transition"
                >
                  <Settings size={22} /> Sozlamalar
                </Link>
              </li>
            </ul>
          </nav>

          <div className="p-6">
            <button className="w-full bg-red-500 text-white font-semibold rounded-xl py-2.5 hover:bg-red-600 transition">
              Chiqish
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
