import { useState } from "react";
import { Link } from "react-router-dom";
import { useHandleResize } from "@/hooks/useHandleResize";
import { libraryLinks, menuLinks } from "./data";
import Lists from "./Lists";
import { Popcorn, X } from 'lucide-react';

const Sidebar = () => {

  const [showLogo, setShowLogo] = useState(false)

  useHandleResize({
    setState: setShowLogo,
    breakpoint: 1024,
    true_value: true,
    false_value: false
  })

  return (
    <>
      <aside className="drawer-side relative z-50">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <nav className="fixed left-0 w-72 lg:w-20 h-screen bg-[#283440] lg:bg-[#283440]/80">
          <section className="pl-7 h-20 flex items-center justify-between">
            <Link to='home' className="flex items-center space-x-4 font-bold text-turquoise text-2xl">
              <Popcorn className="w-5 h-5 text-turquoise" />
              {showLogo && (<h1>
                flixi
                <span className="text-gray-400">Verse</span>
              </h1>)}
            </Link>
            <section className="mr-4">
              <span className="sr-only">Close</span>
              <section className="block lg:hidden rounded-lg p-0.5 bg-gray-700">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay cursor-pointer">
                  <X className="w-5 h-5 text-gray-400 hover:text-turquoise" />
                </label>
              </section>
            </section>
          </section>
          <Lists
            category="Menu"
            linkCategory={menuLinks}
          />
          <Lists
            category="Library"
            linkCategory={libraryLinks}
          />
        </nav>
      </aside>

    </>
  );
}

export default Sidebar;