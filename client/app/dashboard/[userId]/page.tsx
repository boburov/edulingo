"use client";

import { auth_service } from "@/app/api/service/auth.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "../components/Header";

const page = () => {


  return (
    <div>
      <Header />
    </div>
  );
};

export default page;
