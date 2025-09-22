import Link from "next/link";

const Hero = () => {
  return (
    <div className="pt-32 flex flex-col items-center gap-y-4 ">
      <h1 className="text-6xl font-bold text-gray-800 uppercase tracking-wider mb-2 text-center">
        edulingo - platforma
        <br /> ta'lim bizdan boshlanadi
      </h1>
      <p className="text-2xl font-medium tracking-wide text-gray-600 mb-5">
        biz orqali chet tillarini oson va qizqarli tarzda o'zlashtring
      </p>

      <div className="flex items-center gap-10">
        <Link href={'/auth/signup'} className="px-20 pt-4 pb-3.5 bg-green-300/50 text-green-900 rounded-2xl">
          boshlash
        </Link>
        <Link href={'https://t.me/boburovdev'} className="px-20 pt-4 pb-3.5 border-green-300/50 border-2 text-green-900 rounded-2xl">
          kurs haqida
        </Link>
      </div>
    </div>
  );
};

export default Hero;
