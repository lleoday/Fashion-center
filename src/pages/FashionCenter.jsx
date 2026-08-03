import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FashionContext } from "../FashionContext";
import FashionCard from "../components/FashionCard";
import { FaTimes, FaTrash, FaEdit } from "react-icons/fa";

export default function FashionCenter() {
  const { fashionList, deleteFashion } = useContext(FashionContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedFashion, setSelectedFashion] = useState(null);

  const filteredFashion = fashionList.filter((fashion) =>
    fashion.name.toLowerCase().includes(search.toLowerCase())
  );

  // Fungsi membuka modal (diperbaiki variabelnya)
  const openModal = (item) => {
    setSelectedFashion(item);
  };

  const closeModal = () => {
    setSelectedFashion(null);
  };

  return (
    <div className="relative">
      <h1 className="text-4xl font-bold text-gray-800">Fashion Center</h1>
      <p className="text-gray-500 mt-2">Semua koleksi fashion kamu.</p>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
        <input
          type="text"
          placeholder="Cari fashion..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-96 border border-gray-300 rounded-xl p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <Link to="/add-fashion">
          <button className="w-full sm:w-auto bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition-colors shadow-md font-medium">
            + Tambah Fashion
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {filteredFashion.map((fashion) => (
          <div key={fashion.id} className="relative group cursor-pointer">
            
            {/* Overlay transparan untuk mendeteksi klik */}
            <div 
              className="absolute inset-0 z-10 rounded-xl hover:bg-black/5 transition-colors"
              onClick={() => openModal(fashion)} // <-- Kirim data 'fashion' yang asli
            ></div>

            <FashionCard fashion={fashion} />
          </div>
        ))}
        {filteredFashion.length === 0 && (
          <p className="col-span-full text-center text-gray-500 mt-8">Fashion tidak ditemukan.</p>
        )}
      </div>

      {/* MODAL EDIT/DELETE */}
      {selectedFashion && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in">
            
            <div className="flex justify-between items-center p-5 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-800">Detail Fashion</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-red-500 transition">
                <FaTimes size={20} />
              </button>
            </div>

            {/* Bagian ini menggunakan selectedFashion yang sudah benar datanya */}
            <div className="p-5 space-y-4">
              <img 
                src={selectedFashion.image} 
                alt={selectedFashion.name} 
                className="w-full h-48 object-cover rounded-lg shadow-sm"
                // Tambahkan onError untuk mencegah gambar rusak
                onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found"; }}
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedFashion.name}</h2>
                <p className="text-gray-500">{selectedFashion.brand}</p>
                <div className="flex gap-2 mt-2">
                  <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">{selectedFashion.category}</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">{selectedFashion.color}</span>
                </div>
              </div>
            </div>

            <div className="p-5 border-t border-gray-100 flex gap-3">
              <button
                onClick={() => {
                  navigate(`/edit-fashion/${selectedFashion.id}`);
                  closeModal();
                }}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 font-medium transition"
              >
                <FaEdit /> Edit
              </button>
              <button
                onClick={() => {
                  deleteFashion(selectedFashion.id); // <-- ID yang benar akan terkirim
                  closeModal();
                }}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 font-medium transition"
              >
                <FaTrash /> Hapus
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}