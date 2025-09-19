"use client";
import { auth_service } from "@/app/api/service/auth.service";
import Google from "@/app/components/Google";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const loading = useState(false);
  const [email, setEmail] = useState("")

  const login = async (e: React.FormEvent) => {
    e.preventDefault(); 
    try {
      const res = await auth_service.login({ email });
      console.log("Login response:", res);

      localStorage.setItem("access_token", res.access_token);

      window.location.href = "/auth/onboard";
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <div className="container min-h-screen flex items-center justify-center">
      <form
        action=""
        className="grid grid-cols-2 gap-x-5 gap-y-2 max-w-[420px] p-10 rounded-2xl border border-gray-300"
      >
        <h1 className="col-start-1 col-end-3 text-2xl font-semibold mb-5 text-center">
          Hisobga kirish
        </h1>

        <div className="flex flex-col items-start w-full col-start-1 col-end-3">
          <label htmlFor="email">email</label>
          <input
            type="text"
            className="border border-gray-300 px-3 py-2 rounded-xl w-full"
            placeholder="email"
            value={email}
            onChange={(value) => setEmail(value.target.value)}
            id="email"
          />
        </div>
        <button
          onClick={login}
          className="col-start-1 col-end-3 bg-green-300 text-green-900 py-2.5 mt-3 rounded-xl"
        >
          yuborish
        </button>
        <div className="col-start-1 col-end-3 flex items-center gap-3">
          <hr className="w-full" />
          yoki
          <hr className="w-full" />
        </div>
        <div className="col-start-1 col-end-3">
          <Google />
        </div>
        <p className="col-start-1 col-end-3 text-gray-400 lowercase leading-5 text-xs">
          Agar hisobingiz bo'lmasa{" "}
          <Link href={"/auth/signup"} className="text-green-700 underline">
            Hisob yaratish
          </Link>{" "}
          sahifaga o'ting
        </p>
      </form>
    </div>
  );
};

export default page;
