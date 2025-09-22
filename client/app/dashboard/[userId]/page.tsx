"use client";

import { auth_service } from "@/app/api/service/auth.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "../components/Header";

const page = () => {
  const routser = useRouter();

  useEffect(() => {
    const acces_token = localStorage.getItem("acces_token");
    const refresh_token = localStorage.getItem("refresh_token");

    if ((acces_token && refresh_token) !== null || undefined) {
      const isUser = auth_service.verify(String(acces_token)).then((e) => {
        return e.status;
      });
      console.log("token tasdiqlandi");
    } else {
      console.log("ha bu tokenlar null yoki undefined bo'lishi mumkun");
    }

    // if (isUser) {
    //   routser.push("/auth/signin");
    // }
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default page;
