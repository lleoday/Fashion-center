import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white rounded-xl shadow-md px-6 py-4">

      <h1 className="text-2xl font-bold">
        Fashion Center
      </h1>

      <div className="flex items-center gap-4">

        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">

          <FaSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Cari fashion..."
            className="bg-transparent ml-2 outline-none"
          />

        </div>

        <FaBell
          size={20}
          className="cursor-pointer"
        />

        <FaUserCircle
          size={32}
          className="cursor-pointer"
        />

      </div>

    </div>
  );
}