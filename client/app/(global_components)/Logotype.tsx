import Image from "next/image";
import Link from "next/link";

interface EdulingoProps {
  link?: string;
}

export default function Logotype({ link }: EdulingoProps) {
  return (
    <Link href={link ? link : "/"} className="inline-block">
      <Image
        src={"/icons/logo.svg"}
        alt="Logotype Edulingo"
        width={140}
        height={38.5}
      />
    </Link>
  );
}
