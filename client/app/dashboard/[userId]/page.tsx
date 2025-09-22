"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useAuth } from "@/hooks/useAuth";
import { RootState } from "@/app/store/store";

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
      <div className="container space-y-6 pt-20">
        <div className="flex items-center space-x-4">
          <img
            src={user.profile_pic || "/default-profile.png"}
            alt="profile"
            className="w-20 h-20 rounded-full border"
          />
          <div>
            <h2 className="text-2xl font-bold">
              {user.name} {user.surname}
            </h2>
            <p className="text-gray-500">{user.email}</p>
            <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
              {user.role || "Student"}
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Mening kurslarim</h3>
          <ul className="space-y-2">
            {user.courses.length <= 0 ? (
              <div className="px-3 pt-2 pb-1.5 bg-red-200 text-red-700 rounded-md">
                hozircha kurslar mavjud emas
              </div>
            ) : (
              <>
                <li className="p-3 bg-gray-50 rounded-lg shadow">
                  <p className="font-medium">English 101</p>
                  <p className="text-sm text-gray-500">Course ID: EN-101</p>
                </li>
                <li className="p-3 bg-gray-50 rounded-lg shadow">
                  <p className="font-medium">Frontend Development</p>
                  <p className="text-sm text-gray-500">Course ID: FE-202</p>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* History */}
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Oxirgi ko‘rilgan darslar
          </h3>
          <ul className="space-y-2">
            {/* Bu ham keyinchalik API’dan kelishi kerak */}
            <li className="text-sm text-gray-600">
              2025-09-21 • Lesson ID: L-12 (Vocabulary)
            </li>
            <li className="text-sm text-gray-600">
              2025-09-19 • Lesson ID: L-7 (Grammar Basics)
            </li>
          </ul>
        </div>

        {/* Metadata */}
        <div className="text-sm text-gray-500">
          <p>
            Ro‘yxatdan o‘tgan sana:{" "}
            {new Date(user.created_at || "").toLocaleDateString()}
          </p>
          <p>
            Hisob holati: {user.is_verified ? "Verified ✅" : "Not verified ❌"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
