"use client";
import authService from "@/app/api/services/authService";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BeatLoader } from "react-spinners";

export default function SignupForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const [acception, setAcception] = useState(false);

  const handleCheckbox = (check: boolean) => {
    setAcception(check);
  };

  async function handleRegister(e: any) {
    e.preventDefault();
    try {
      setLoading(true);
      if (!acception) {
        setLoading(false);
        return setErrorMessage("pleace read and accept the terms");
      }
      const data = {
        name: name,
        surname: surname,
        email: email,
      };
      console.log(data);

      const register_data = { name, email };
      await authService.signup(register_data);
      router.push(`/onboarding?email=${email}`);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      if (!error.response) {
        setErrorMessage("Something went wrong, try again later!");
      } else {
        setErrorMessage(error.response.data.message);
      }
    }
  }

  return (
    <form className="text_color space-y-3" onSubmit={handleRegister}>
      {errorMessage !== "" && (
        <p className="text-red-600 bg-red-600/10 rounded-xl px-4 py-2">
          {errorMessage}
        </p>
      )}
      <div className="flex gap-5 justify-between">
        <div className="flex flex-col space-x-0.5 w-full">
          <label htmlFor="name">Ism</label>
          <input
            type="text"
            name="name"
            id="name"
            className="global_input"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-x-0.5 w-full">
          <label htmlFor="name">Familiya</label>
          <input
            type="text"
            name="name"
            id="name"
            className="global_input"
            required
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col space-x-0.5">
        <label htmlFor="email">E-po'chta</label>
        <input
          type="email"
          name="email"
          id="email"
          className="global_input"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex gap-2 items-center">
        <Checkbox
          id="check"
          checked={acception}
          onCheckedChange={handleCheckbox}
          className="border-gray-400 data-[state=checked]:body_color data-[state=checked]:text-white data-[state=checked]:border_color"
        />
        <label htmlFor="check" className="flex gap-1">
          <Link href={"/terms"} className="inline-block base_color">
            Shartlarga
          </Link>
          <p className="text-gray-800">rozi boling</p>
        </label>
      </div>
      <button
        type="submit"
        className="body_color text-white font-medium py-2 rounded-xl cursor-pointer w-full"
      >
        {!loading ? (
          "Ro'yxatdan o'tish"
        ) : (
          <BeatLoader color="#ffffff" size={10} />
        )}
      </button>
    </form>
  );
}
