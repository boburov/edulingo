"use client";

import { auth_service } from "@/app/api/service/auth.service";
import { setUser } from "@/app/features/userSlice";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Page = () => {
  const token = useSearchParams().get("token");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    auth_service.verify(token).then((res) => {
      alert("Email tasdiqlandi ✅");

      dispatch(setUser(res.user));
      console.log(res.user);
      localStorage.setItem("token", res.access);
      console.log("User:", res.user);
      console.log("Token:", res.access);

      window.location.href = "/dashboard/" + res.user.id;
    });
  }, [token, dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      Verifying...
    </div>
  );
};

export default Page;
