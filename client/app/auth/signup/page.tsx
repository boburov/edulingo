import Google from "@/app/components/Google";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="container min-h-screen flex items-center justify-center">
      <form
        action=""
        className="grid grid-cols-2 gap-x-5 gap-y-2 max-w-[420px] p-10 rounded-2xl border border-gray-300"
      >
        <h1 className="col-start-1 col-end-3 text-2xl font-semibold mb-5 text-center">
          Ro'yxatdan o'tish
        </h1>
        <div className="flex flex-col items-start w-full">
          <label htmlFor="ism">ism</label>
          <input
            type="text"
            className="border border-gray-300 px-3 py-2 rounded-xl w-full"
            placeholder="ism"
            id="ism"
          />
        </div>

        <div className="flex flex-col items-start w-full">
          <label htmlFor="familya">familya</label>
          <input
            type="text"
            className="border border-gray-300 px-3 py-2 rounded-xl w-full"
            placeholder="familya"
            id="familya"
          />
        </div>

        <div className="flex flex-col items-start w-full col-start-1 col-end-3">
          <label htmlFor="email">email</label>
          <input
            type="text"
            className="border border-gray-300 px-3 py-2 rounded-xl w-full"
            placeholder="email"
            id="email"
          />
        </div>
        <button className="col-start-1 col-end-3 bg-green-300 text-green-900 py-2.5 mt-3 rounded-xl">
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
          Agar avval ro'yxatdan o'tgan bo'lsangiz{" "}
          <Link href={"/auth/signin"} className="text-green-700 underline">
            Login
          </Link>{" "}
          sahifaga o'ting
        </p>
      </form>
    </div>
  );
};

export default page;
