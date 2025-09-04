import Image from "next/image";
import Author from "./Author";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full space-y-5">
      <Author />
      <div className="w-full flex justify-between items-center gap-5">
        <div className="flex-1 space-y-4">
          <h1 className="text-5xl font-semibold">
            Now you can focus on{" "}
            <span className="text_color">Your own project</span> instead of
            configuration,{" "}
            <span className="text_color">enjoy Kickstart JS</span>
          </h1>
          <p>With pre-built Authentication with Github and Google Providers</p>
          <Link
            href={"/panel"}
            className="py-2 px-4 font-medium text-white body_color inline-block rounded-xl"
          >
            Navigate to panel
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          <Image
            src={"/icons/icon.svg"}
            alt="Credit cards"
            width={300}
            height={0}
          />
        </div>
      </div>
    </div>
  );
}
