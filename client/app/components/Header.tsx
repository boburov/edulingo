import { User } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b border-gray-300 text-gray-800">
      <div className="container py-3 flex items-center justify-between ">
        <Link href="/" className="text-3xl font-bold">
          Logo
        </Link>

        <div className="flex items-center gap-10">
          <nav>
            <ul className="flex items-center gap-5">
              <li>
                <Link href="/courses">kurslar</Link>
              </li>
              <li>
                <Link href="/courses">o'qtuvchilar</Link>
              </li>
              <li>
                <Link href="/courses">bog'lanish</Link>
              </li>
            </ul>
          </nav>

          <Link
            href="/auth/signup"
            className="bg-green-300/50 px-4 pt-2.5 pb-2 text-md  rounded-xl text-green-900"
          >
            Kirish
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
