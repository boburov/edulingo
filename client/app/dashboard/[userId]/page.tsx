"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useAuth } from "@/hooks/useAuth";
import { RootState } from "@/app/store/store";
import {
  User as UserIcon,
  Mail,
  BookOpen,
  GraduationCap,
  Clock,
  ShieldCheck,
  Verified,
  Cross,
  List,
} from "lucide-react";

const Page = () => {
  const router = useRouter();
  useAuth();

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (!user.isLoggedIn) {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/auth/signup");
      }
    }
  }, [user.isLoggedIn, router]);

  if (!user.isLoggedIn) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="container space-y-8 pt-20 max-w-3xl mx-auto">
        {/* Profile */}
        <div className="flex items-center space-x-4 p-5 bg-white rounded-2xl shadow">
          <img
            src={user.profile_pic || "/default-profile.png"}
            alt="profile"
            className="w-20 h-20 rounded-full border"
          />
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <UserIcon size={22} className="text-blue-600" />
              {user.name} {user.surname}
            </h2>
            <p className="text-gray-500 flex items-center gap-2">
              <Mail size={18} className="text-gray-400" />
              {user.email}
            </p>
            <span className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full mt-1">
              <GraduationCap size={16} /> {user.role || "Student"}
            </span>
          </div>
        </div>

        {/* Courses */}
        <div className="p-5 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="text-green-600" size={20} />
            Mening kurslarim
          </h3>
          <ul className="space-y-2">
            {user.courses.length <= 0 ? (
              <div className="px-3 pt-2 pb-1.5 bg-red-200 text-red-700 rounded-md">
                Hozircha kurslar mavjud emas
              </div>
            ) : (
              user.courses.map((course: any, idx: number) => (
                <li
                  key={idx}
                  className="p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition"
                >
                  <p className="font-medium">{course.title}</p>
                  <p className="text-sm text-gray-500">
                    Course ID: {course.course_id}
                  </p>
                </li>
              ))
            )}
          </ul>
        </div>

        <div className="p-5 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <List className="text-green-600" size={20} />
            Tomosha qilingan darslar
          </h3>
          {user.courses.length == 0 ? (
            <div className="px-3 pt-2 pb-1.5 bg-amber-200 text-amber-700 rounded-md">
              Hozircha hech qanday dars ko‘rmadingiz
            </div>
          ) : (
            <>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="text-purple-600" size={20} />
                Oxirgi ko‘rilgan darslar
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>2025-09-21 • Lesson ID: L-12 (Vocabulary)</li>
                <li>2025-09-19 • Lesson ID: L-7 (Grammar Basics)</li>
              </ul>
            </>
          )}
        </div>

        <div className="p-5 bg-white rounded-2xl shadow text-sm text-gray-600 space-y-2">
          <p>
            <span className="font-medium">Ro‘yxatdan o‘tgan sana:</span>{" "}
            {new Date(user.created_at || "").toLocaleDateString()}
          </p>
          <p className="flex items-center gap-2">
            <ShieldCheck
              className={user.is_verified ? "text-green-600" : "text-red-600"}
              size={18}
            />
            Hisob holati:{" "}
            {user.is_verified ? (
              <>
                Tasdiqlangan
                <Verified className="text-green-600" size={25} />
              </>
            ) : (
              <>
                Tasdiqlanmagan
                <Cross className="rotate-45 text-rose-600" size={25} />
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
