import { Link } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import SearchBar from "@/components/SearchBar";
import { Bell, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-10">
      <section className=" flex items-center gap-8 bg-neutral h-20 px-4 lg:px-8">
        <section className="flex items-center gap-4">
          <label htmlFor="my-drawer-2" className="drawer-button cursor-pointer lg:hidden">
            <Menu className="w-5 h-5 text-gray-500/90" />
          </label>
          <Link to='home' className={`flex items-center gap-1.5 font-bold text-turquoise text-2xl`}>
            <h2>
              flixi
              <span className="text-gray-400">Verse</span>
            </h2>
          </Link>

        </section>
        <nav className="hidden lg:flex items-center justify-between gap-4">
          <ul className="flex items-center justify-center gap-4 lg:gap-8">
            <li className="text-sm text-gray-400 font-medium">
              <Link to='about'>Movies</Link>
            </li>
            <li className="text-sm text-gray-400 font-medium">
              <Link to='series'>Series</Link>
            </li>
            <li className="text-sm text-gray-400 font-medium">
              <Link to='tv-shows'>TV Shows</Link>
            </li>
            <li className="text-sm text-gray-400 font-medium">
              <Link to='movies'>Anime</Link>
            </li>
          </ul>
        </nav>

        <section className="ml-auto flex items-center space-x-8 md:space-x-8">
          <div className="hidden md:flex w-80 2xl:w-96">
            <SearchBar />
          </div>
          <section className="flex items-center space-x-8 md:space-x-8">
            <Bell className="w-5 h-5 text-gray-500/90" />
            <Avatar className="w-7 h-auto">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </section>
        </section>
      </section>
    </header>
  );
}

export default Header;