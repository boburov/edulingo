import { Lesson } from "@/app/types/User";
import { Plus } from "lucide-react";

export default function VocManager({ lesson }: { lesson: Lesson }) {
  return (
    <div className="border-y border-gray-300 py-5 flex justify-between items-center">
      <p className="text-xl text-gray-800 font-semibold">Lugat</p>
      <button className="basic_button">
        <Plus /> So'z qo'shish
      </button>
    </div>
  );
}
