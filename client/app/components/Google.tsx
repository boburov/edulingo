"use client";

import google_ic from "@/public/google.svg";
import Image from "next/image";
import { api_endpoint } from "../api/api.endpoint";

const Google = () => {
  const google_register = () => {
    window.location.href = `http://localhost:8000/${api_endpoint.google}`;
  };
  return (
    <div
      className="text-center bg-gray-900 text-white pt-2 pb-2.5 rounded-xl flex items-center gap-4 justify-center"
      onClick={google_register}
    >
      <Image src={google_ic} alt="google icon" /> Google
    </div>
  );
};

export default Google;
