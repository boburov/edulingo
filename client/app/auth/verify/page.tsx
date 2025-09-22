"use client";

import { auth_service } from "@/app/api/service/auth.service";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
}

const Page = () => {
  const token = useSearchParams().get("token");

  useEffect(() => {
    const res = auth_service.verify(String(token)).then((res) => {
      alert("Email tasdiqlandi");
      localStorage.setItem("user", JSON.stringify(res.user as User));
      localStorage.setItem("token", res.access);
      localStorage.setItem("userId", res.user.id);
      const userId = localStorage.getItem("userId");
      if (!userId || userId === undefined) {
        return (window.location.href = "/auth/signup");
      }else{
        window.location.href = "/dashboard/" + userId;
      }
    });
  }, []);

<<<<<<< HEAD
  return <div className="min-h-screen flex items-center justify-center">Verifying...</div>;
=======
  return <div>Verifying...</div>;
>>>>>>> 54e9012c1ffb5f21f63f02f4572604092863ea20
};

export default Page;
