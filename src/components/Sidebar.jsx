import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTshirt,
  FaPlusCircle,
  FaHeart,
  FaChartBar,
  FaUser,
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
  return (
    <aside className="w-64 bg-zinc-900 text-white h-screen fixed p-6">
      <h1 className="text-3xl font-bold mb-10">
        Fashion Center
      </h1>

      <ul className="space-y-2">
        {menus.map((menu) => (
          <li key={menu.name}>
            <NavLink
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive
                    ? "bg-pink-500"
                    : "hover:bg-zinc-700"
                }`
              }
            >
              {menu.icon}
              {menu.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}