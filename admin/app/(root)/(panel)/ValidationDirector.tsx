"use client";
import { clearValidation } from "@/app/store/slices/adminSlice";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

export default function OrgValidator() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(clearValidation());
    router.push(`/validation/?page=${pathname}`);
  }, [pathname, router]);

  return <></>;
}
