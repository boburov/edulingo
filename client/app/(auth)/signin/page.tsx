import Heading from "@/app/(global_components)/Heading";
import SigninForm from "./SigninForm";
import Socials from "../(socials)/Socials";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edulingo | Sign In",
  description: "Easy to use payment API for startups | sign in page",
};

export default function SignIn() {
  return (
    <div className="w-full space-y-4">
      <Heading text="Tizimga qaytib kirish" />
      <SigninForm />
      <Socials />
      <div className="flex justify-center">
        <p className="text-gray-800">
          Edulingoda yangimisiz?{" "}
          <Link href={"/signup"} className="base_color">
            Ro'yxatdan o'ting
          </Link>
        </p>
      </div>
    </div>
  );
}
