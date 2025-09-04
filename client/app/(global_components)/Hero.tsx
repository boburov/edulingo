"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  let token: string | null = null;

  if (typeof window !== "undefined") {
    token = localStorage.getItem("access_token");
  }

  return (
    <div className="w-full space-y-5">
      <div className="w-full flex justify-between items-center gap-5">
        <div className="flex-1 space-y-4">
          <h1 className="text-5xl font-semibold">
            Edulingo - Sizning{" "}
            <span className="base_color">Bilim Yo‘lingiz</span> Shu Yerdan{" "}
            <span className="base_color">Boshlanadi</span>
          </h1>
          <p>
            Zamonaviy ta’lim orqali orzularingizga bir qadam yaqinlashing. Biz
            bilan birga o‘rganing
          </p>
          {token ? (
            <Link
              href={"/panel"}
              className="py-2 px-4 font-medium text-white body_color inline-block rounded-xl"
            >
              Panelga otish
            </Link>
          ) : (
            <Link
              href={"/signup"}
              className="py-2 px-4 font-medium text-white body_color inline-block rounded-xl"
            >
              Boshlash
            </Link>
          )}
        </div>
        <div className="flex-1 flex justify-end">
          <Image
            src={"/icons/icon.svg"}
            alt="Credit cards"
            width={300}
            height={0}
          />
        </div>
      </div>
    </div>
  );
}
