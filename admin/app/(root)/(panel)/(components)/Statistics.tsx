"use client";
import Heading from "@/app/(global_components)/Heading";
import Loader from "@/app/(global_components)/Loader";
import validationService from "@/app/api/services/verificationService";
import { useEffect, useState } from "react";

export default function Statistics() {
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(true);

  async function getStats() {
    try {
      const res: any = await validationService.getStats();
      console.log(res);
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

  useEffect(() => {
    getStats();
  }, []);

  return (
    <div className="space-y-5">
      <Heading>Statisticalar</Heading>
      {error && (
        <p className="text-red-600 bg-red-50 rounded-xl px-4 py-2 text-center">
          {error}
        </p>
      )}
      {!loading ? (
        <div>
          <p>statistics</p>
        </div>
      ) : (
        <div className="flex py-10 items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
}
