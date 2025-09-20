"use client";
import { Lesson } from "@/app/types/User";
import NewVocForm from "./NewVocForm";
import { useState } from "react";

export default function VocManager({ lesson }: { lesson: Lesson }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  async function GetVocs() {
    try {
    } catch (err: any) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Xatolik yuz berdi. Iltimos, qaytadan urinib ko‘ring.");
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="border-y border-gray-300 py-5 space-y-5">
      <p className="text-xl text-gray-800 font-semibold">Lugat</p>
      <div>
        <NewVocForm />
      </div>
    </div>
  );
}
