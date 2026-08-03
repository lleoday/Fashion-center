import {
  FaHome,
  FaTshirt,
  FaPlusCircle,
  FaHeart,
  FaChartBar,
  FaUser,
} from "react-icons/fa";

export default function Sidebar() {
  const menus = [
    { icon: <FaHome />, title: "Dashboard" },
    { icon: <FaTshirt />, title: "Fashion Center" },
    { icon: <FaPlusCircle />, title: "Tambah Fashion" },
    { icon: <FaHeart />, title: "Wishlist" },
    { icon: <FaChartBar />, title: "Statistik" },
    { icon: <FaUser />, title: "Profile" },
  ];

  return (
    <aside className="w-64 h-screen bg-zinc-900 text-white fixed left-0 top-0 p-6">
      <h1 className="text-3xl font-bold mb-10">
        Fashion Center
      </h1>

      <ul className="space-y-3">
        {menus.map((menu) => (
          <li
            key={menu.title}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-500 transition cursor-pointer"
          >
            {menu.icon}
            <span>{menu.title}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}