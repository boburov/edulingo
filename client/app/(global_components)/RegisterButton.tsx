"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RegisterButton() {
  const [isRegistered, setIsRejistered] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    const reset_token = localStorage.getItem("reset_token");
    if (reset_token && access_token) {
      setIsRejistered(true);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="space-x-3">
        <Link
          href={"/signin"}
          className="inline-block border-2 px-4 py-2 rounded-xl bg-black/5 border-black/bg-black/5 text-black/5"
        >
          Loading
        </Link>
        <Link
          href={"/signin"}
          className="inline-block border-2 px-4 py-2 rounded-xl bg-black/5 border-black/bg-black/5 text-black/5"
        >
          Loading
        </Link>
      </div>
    );
  }

  return (
    <div className="space-x-3">
      <Link
        href={"/signin"}
        className="inline-block border-2 border_color px-4 py-2 rounded-xl"
      >
        Kirish
      </Link>
      {!isRegistered ? (
        <Link
          href={"/signup"}
          className="inline-block border-2 border_color px-4 py-2 rounded-xl body_color text-white"
        >
          Ro'yxatdan o'tish
        </Link>
      ) : (
        <Link
          href={"/panel"}
          className="inline-block border-2 border_color px-4 py-2 rounded-xl body_color text-white"
        >
          Panel
        </Link>
      )}
    </div>
  );
}
