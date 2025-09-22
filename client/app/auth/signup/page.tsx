"use client";

import { auth_service } from "@/app/api/service/auth.service";
import Google from "@/app/components/Google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const router = useRouter();
  const [userDate, setUserDate] = useState({
    name: "",
    surname: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !userDate.name.trim() ||
      !userDate.surname.trim() ||
      !userDate.email.trim() ||
      !userDate.email.includes("@gmail.com")
    )
      return toast.error("malumotlarni to'ldring", {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    router.push("/auth/onboard");

    auth_service
      .register(userDate)
      .then((res) => {
        setUserDate({
          name: "",
          surname: "",
          email: "",
        });
      })
      .catch((err) => {
        toast.error("Email band", {
          position: "top-center",
          autoClose: 700,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

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
          <label htmlFor="name">name</label>
          <input
            type="text"
            className="border border-gray-300 px-3 py-2 rounded-xl w-full"
            placeholder="name"
            id="name"
            value={userDate.name}
            onChange={(e) => setUserDate({ ...userDate, name: e.target.value })}
          />
        </div>

        <div className="flex flex-col items-start w-full">
          <label htmlFor="surname" className="font-sans">
            surname
          </label>
          <input
            type="text"
            className="border border-gray-300 px-3 py-2 rounded-xl w-full"
            placeholder="surname"
            id="surname"
            value={userDate.surname}
            onChange={(e) =>
              setUserDate({ ...userDate, surname: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col items-start w-full col-start-1 col-end-3">
          <label htmlFor="email">email</label>
          <input
            type="text"
            className="border border-gray-300 px-3 py-2 rounded-xl w-full"
            placeholder="email"
            id="email"
            value={userDate.email}
            onChange={(e) =>
              setUserDate({ ...userDate, email: e.target.value })
            }
          />
        </div>
        <button
          onClick={handleSubmit}
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
