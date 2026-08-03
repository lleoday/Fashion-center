import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // Tambahkan useNavigate
import { FashionContext } from "../FashionContext";
import StatsCard from "../components/StatsCard";
import { FaHeart, FaEdit, FaTrash } from "react-icons/fa";

export default function Dashboard() {
  const { fashionList, deleteFashion } = useContext(FashionContext);
  const navigate = useNavigate();

  // Hitung statistik
  const totalFashion = fashionList.length;
  const totalFavorite = fashionList.filter((item) => item.favorite).length;

  return (
    <div>
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500 mt-2">Selamat datang kembali 👋</p>
        </div>
      </div>

      {/* Kartu Statistik (Tetap sama seperti sebelumnya) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        <StatsCard title="Total Fashion" value={totalFashion} color="text-pink-500" />
        <StatsCard title="Wishlist" value={totalFavorite} color="text-blue-500" />
        <StatsCard title="Outfit" value="42" color="text-green-500" />
        <StatsCard title="Favorite" value={totalFavorite} color="text-red-500" />
      </div>

      {/* --- BAGIAN INI DIUBAH --- */}
      <h2 className="text-2xl font-bold mt-12 mb-5 text-gray-800 flex items-center justify-between">
        <span>📋 Ringkasan Inventaris Fashion</span>
        <Link to="/fashion-center" className="text-sm font-normal text-pink-500 hover:underline">
          Lihat Semua di Fashion Center →
        </Link>
      </h2>

      {/* Mengganti Grid Kartu dengan Tabel Data yang Ringkas */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 font-medium border-b border-gray-200">
              <tr>
                <th className="px-6 py-4">Item Fashion</th>
                <th className="px-6 py-4">Brand</th>
                <th className="px-6 py-4 hidden md:table-cell">Kategori</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {fashionList.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-10 h-10 rounded-md object-cover border border-gray-200"
                    />
                    <span className="font-semibold text-gray-800">{item.name}</span>
                  </td>
                  <td className="px-6 py-4">{item.brand}</td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded text-xs font-medium">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {item.favorite ? (
                      <FaHeart className="text-pink-500 inline-block" />
                    ) : (
                      <span className="text-gray-300 text-xs">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 flex justify-end gap-2">
                    <button 
                      onClick={() => navigate(`/edit-fashion/${item.id}`)}
                      className="text-blue-500 hover:text-blue-700 bg-blue-50 p-2 rounded-lg transition"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button 
                      onClick={() => deleteFashion(item.id)}
                      className="text-red-500 hover:text-red-700 bg-red-50 p-2 rounded-lg transition"
                      title="Hapus"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Jika data kosong */}
        {fashionList.length === 0 && (
          <div className="p-10 text-center text-gray-400">
            Belum ada data fashion. <Link to="/add-fashion" className="text-pink-500 underline">Tambah sekarang</Link>
          </div>
        )}
      </div>
    </div>
  );
}