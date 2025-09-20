import Loader from "@/app/(global_components)/Loader";
import { Voc } from "@/app/types/User";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export default function VocCard({ voc, index }: { voc: Voc; index: number }) {
  const is_even = index % 2 !== 1;
  const [loading, setLoading] = useState(false);

  return (
    <div
      className={`w-full flex items-center justify-between ${
        is_even && "bg-gray-200"
      }`}
    >
      <p className="p-2">{index}</p>
      <p className="p-2 flex-1">{voc.word}</p>
      <p className="p-2 flex-1">{voc.translation}</p>
      <button className={`p-2 ${loading ? "text-gray-700" : "text-red-500"} cursor-pointer`}>
        {!loading ? <Trash2 /> : <Loader />}
      </button>
    </div>
  );
}
