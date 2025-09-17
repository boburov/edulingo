"use client";
import Image from "next/image";

export default function GoogleLoginButton() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8000/auth/google";
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="flex gap-3 cursor-pointer w-full border border-gray-400 p-3 rounded-xl items-center justify-center"
    >
      <Image src="/social_icons/Google.svg" alt="google icon" width={22} height={22} />
      Google bilan kirish
    </button>
  );
}
