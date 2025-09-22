"use client";

import { auth_service } from "@/app/api/service/auth.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "../components/Header";

const page = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token === undefined) {
      return router.push("/auth/signup");
    } else {
      auth_service
        .profile(token)
        .then((res: any) => {
          router.push("/dashboard/" + res.id);
        })
        .catch((err) => {
          localStorage.removeItem("token");
          router.push("/auth/signup");
        });
    }
  });
  return (
    <div>
      <Header />
    </div>
  );
};

export default page;
