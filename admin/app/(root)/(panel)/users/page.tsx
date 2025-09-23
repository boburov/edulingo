import Heading from "@/app/(global_components)/Heading";
import { Undo2 } from "lucide-react";
import Link from "next/link";

export default function UsersPage() {
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center w-full">
        <Heading>Foidalanuvchilar</Heading>
        <Link href={"/"} className="basic_button2">
          Orqaga <Undo2 />
        </Link>
      </div>
    </div>
  );
}
