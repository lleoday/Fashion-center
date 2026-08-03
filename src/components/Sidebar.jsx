import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome, FaTshirt, FaPlusCircle, FaHeart, FaChartBar, FaUser, FaBars
} from "react-icons/fa";

const menus = [
  { name: "Dashboard", path: "/", icon: <FaHome /> },
  { name: "Fashion Center", path: "/fashion-center", icon: <FaTshirt /> },
  { name: "Tambah Fashion", path: "/add-fashion", icon: <FaPlusCircle /> },
  { name: "Wishlist", path: "/wishlist", icon: <FaHeart /> },
  { name: "Statistics", path: "/statistics", icon: <FaChartBar /> },
  { name: "Profile", path: "/profile", icon: <FaUser /> },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-zinc-900 text-white h-screen fixed transition-all duration-300 ease-in-out z-50 flex flex-col shadow-xl`}
    >
      {/* Header Logo */}
      <div className="h-20 flex items-center justify-center border-b border-zinc-800 relative">
        <h1
          className={`text-xl font-bold tracking-wider transition-all duration-300 ${
            !isOpen ? "opacity-0 scale-0 hidden" : "opacity-100 scale-100"
          }`}
        >
          Fashion Center
        </h1>

        {/* Tombol Toggle (Posisi diperbaiki) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-3 top-1/2 -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white p-1.5 rounded-full shadow-lg transition-colors z-10"
        >
          <FaBars className={`transition-transform duration-300 ${isOpen ? "rotate-0" : "rotate-180"}`} />
        </button>
      </div>

      {/* Menu List */}
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {menus.map((menu) => (
          <NavLink
            key={menu.name}
            to={menu.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-pink-500 text-white shadow-md shadow-pink-500/30"
                  : "text-gray-400 hover:bg-zinc-800 hover:text-white"
              }`
            }
          >
            <span className="text-xl min-w-[1.5rem] flex justify-center">
              {menu.icon}
            </span>
            <span
              className={`whitespace-nowrap font-medium transition-all duration-300 ${
                !isOpen ? "opacity-0 w-0 hidden" : "opacity-100 w-auto"
              }`}
            >
              {menu.name}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}