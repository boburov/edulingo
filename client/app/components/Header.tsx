"use client";

import { User, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/icons/logo.svg";
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-300 text-gray-800">
      <div className="container py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="w-40">
          <Image src={logo} alt="edulingo logo"  />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          <nav>
            <ul className="flex items-center gap-5">
              <li>
                <Link href="/contact">Bog‘lanish</Link>
              </li>
            </ul>
          </nav>

          <Link
            href="/auth/signup"
            className="bg-green-300/50 px-4 py-2 text-md rounded-xl text-green-900"
          >
            Kirish
          </Link>
        </div>

        {/* Mobile toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4">
          <nav>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/courses" onClick={() => setOpen(false)}>
                  Kurslar
                </Link>
              </li>
              <li>
                <Link href="/courses" onClick={() => setOpen(false)}>
                  O‘qituvchilar
                </Link>
              </li>
              <li>
                <Link href="/courses" onClick={() => setOpen(false)}>
                  Bog‘lanish
                </Link>
              </li>
            </ul>
          </nav>

          <Link
            href="/auth/signup"
            onClick={() => setOpen(false)}
            className="block mt-4 bg-green-300/50 px-4 py-2 text-md rounded-xl text-green-900 text-center"
          >
            Kirish
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
