import { CrossIcon, Menu, Plus, User, User2, UserCircle } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b border-gray-300 text-gray-800">
      <div className="container py-3 flex items-center justify-between ">
        <Link href="/" className="text-3xl font-extrabold font-mono">
          edulingo
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
          <button className="border border-gray-300 px-2 py-1 rounded-full flex items-center gap-2 cursor-pointer">
            <Menu size={25} />
            <span className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white font-bold">
              A
            </span>
          </button> 
        </div>
        <div className="fixed w-1/6 min-h-screen border border-gray-300 top-0 right-0 bg-white py-5 pr-1 pl-5">
          <span className="w-full h-5 flex items-center justify-end">
            <Plus className="rotate-45" size={30} />
          </span>

          <nav className="pt-10">
            <ul>
              <li className="flex items-center h-7  gap-2 text-xl">
                <UserCircle size={25} />
                <p className="h-7 pt-0.5">Profile</p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
