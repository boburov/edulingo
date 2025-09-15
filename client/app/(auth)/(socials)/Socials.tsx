"use client";
import { useState } from "react";
import Google from "./(providers)/Google";
import { useRouter } from "next/navigation";

export default function Socials() {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleGoogleLogin = () => {
    window.location.href = `http://localhost:3000/auth/google`;
  };

  return (
    <div className="text-center space-y-3">
      <p>OR</p>
      {errorMessage !== "" && (
        <p className="text-red-600 bg-red-600/10 rounded-xl px-4 py-2 text-start">
          {errorMessage}
        </p>
      )}
      <div className="space-y-3">
        <Google setErrorMessage={setErrorMessage} />
      </div>
    </div>
  );
}
