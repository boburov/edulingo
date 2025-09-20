import { Lesson } from "@/app/types/User";
import { Plus } from "lucide-react";
import NewVocForm from "./NewVocForm";

export default function VocManager({ lesson }: { lesson: Lesson }) {
  return (
    <div className="border-y border-gray-300 py-5 space-y-5">
      <p className="text-xl text-gray-800 font-semibold">Lugat</p>
      <div>
        <NewVocForm />
      </div>
    </div>
  );
}
