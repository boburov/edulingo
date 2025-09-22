import { Vocs } from "@/app/types/User";
import { Trash2 } from "lucide-react";

export default function VocCard({ voc, i }: { voc: Vocs; i: number }) {
  const is_even = i % 2 === 0;
  return (
    <div
      className={`flex ${
        is_even && "bg-gray-200"
      } items-center justify-between`}
    >
      <p className="p-2">{i}</p>
      <p className="p-2 flex-1 border-r border-r-gray-400">{voc.word}</p>
      <p className="p-2 flex-1">{voc.translation}</p>
      <div className="p-2">
        <button>
          <Trash2 />
        </button>
      </div>
    </div>
  );
}
