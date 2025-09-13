import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <Link href={"/lessons"}>Link</Link>
    </div>
  );
}
