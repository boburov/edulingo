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
    const verifyUser = async () => {
      if (!token) return;

      try {
        const user: User = await auth_service.profile(token);

        // avval storagega yozamiz
        localStorage.setItem("token", token);
        localStorage.setItem("userId", user.id);

        window.location.href = `/dashboard/${user.id}`;
      } catch (error) {
        console.error("Token verification failed:", error);
        window.location.href = "/login";
      }
    };

    verifyUser();
  }, [token]);

  return <div>Verifying...</div>;
};

export default Page;
