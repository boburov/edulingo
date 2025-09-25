import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 px-6 text-center flex flex-col items-center gap-y-6">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight tracking-wide">
        Edulingo — Platforma
        <br />
        <span className="text-green-600">Ta’lim bizdan boshlanadi</span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-2xl font-medium text-gray-600 max-w-2xl">
        Biz orqali chet tillarini <span className="text-green-600">oson</span> va{" "}
        <span className="text-green-600">qiziqarli</span> tarzda o‘zlashtiring
      </p>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4">
        <Link
          href="/auth/signup"
          className="w-full sm:w-auto px-10 sm:px-16 py-3 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-semibold shadow-md transition"
        >
          Boshlash
        </Link>
        <Link
          href="https://t.me/boburovdev"
          target="_blank"
          className="w-full sm:w-auto px-10 sm:px-16 py-3 border-2 border-green-600 text-green-700 rounded-2xl font-semibold hover:bg-green-50 transition"
        >
          Kurs haqida
        </Link>
      </div>
    </section>
  );
};

export default Hero;
