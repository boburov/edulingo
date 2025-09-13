import { ListX } from "lucide-react";
import Heading from "./Heading";

export default function PageMessage({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <div className="w-full flex flex-col justify-between items-center space-y-5">
      <ListX size={140} color="#26a269"/>
      <div className="space-y-2 text-center text_color">
        <Heading>{title}</Heading>
        <p>{message}</p>
      </div>
    </div>
  );
}
