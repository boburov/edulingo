import { Borel, Roboto } from "next/font/google";
import Link from "next/link";

const boren = Borel({
  weight: "400",
});

export default function Home() {
  return (
    <div className="w-full py-10">
      <div className="py-10 flex justify-center items-center">
        <p className={`${boren.className} text-xl`}>Admin panel</p>
        <Link href={"/lessons"}>Link</Link>
      </div>
    </div>
  );
}
