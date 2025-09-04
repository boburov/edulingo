import Heading from "@/app/(global_components)/Heading";
import SignupForm from "./SignupForm";
import Socials from "@/app/(auth)/(socials)/Socials";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edulingo | Sign Up",
  description: "Easy to use payment API for startups | sign up page",
};

export default function SignUp() {
  return (
    <div className="w-full space-y-4">
      <Heading text="Ro'yxatdan o'tish" />
      <SignupForm />
      <Socials />
      <div className="flex justify-center">
        <p className="text-gray-800">
          O'quvchi hisobingiz bormi?{" "}
          <Link href={"/signin"} className="base_color">
            Tizimga kiring
          </Link>
        </p>
      </div>
    </div>
  );
}
