import { memo } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "@/lib/types";
import './style.css'

type ListsProp = {
  category: string
  linkCategory: Link[]
}

const Lists = memo(({ category, linkCategory }: ListsProp) => (
  <ul className="flex flex-col mt-6">
    <li className={`ml-5 text-gray-400 text-sm mb-4 transition duration-5000 delay-100 ease-in`}>{category}</li>
    {
      linkCategory.map((link) => {

        const LucideIcon = link.icon

        return (
          <li key={link.id} className="hover:bg-[#2a3440] rounded-lg font-medium">
            <NavLink to={link.path} className="flex items-center text-gray-400 text-sm h-12 space-x-4 pl-7">
              <LucideIcon className="w-5 h-5" />
              <span className="flex lg:hidden">{link.label}</span>
            </NavLink>
          </li>
        )
      })
    }
  </ul>
));

export default Lists;