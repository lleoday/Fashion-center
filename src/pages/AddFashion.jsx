import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FashionContext } from "../FashionContext";

export default function AddFashion() {
  const { addFashion } = useContext(FashionContext);
  const navigate = useNavigate(); // Untuk kembali ke halaman sebelumnya setelah simpan

  // State untuk form
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    color: "",
    image: "",
    favorite: false,
  });

  // Fungsi handle perubahan input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Fungsi handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Tambahkan ID otomatis (berdasarkan waktu agar unik)
    const newItem = {
      ...formData,
      id: Date.now(), 
    };

    addFashion(newItem); // Simpan ke context
    navigate("/fashion-center"); // Kembali ke halaman Fashion Center
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Tambah Fashion Baru</h1>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-5">
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nama Fashion</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            placeholder="Cth: Oversized Hoodie"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="Cth: Uniqlo"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none bg-white"
            >
              <option value="">Pilih Kategori</option>
              <option value="Outer">Outer</option>
              <option value="Atasan">Atasan</option>
              <option value="Bawahan">Bawahan</option>
              <option value="Shoes">Shoes</option>
              <option value="Aksesoris">Aksesoris</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Warna</label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="Cth: Black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">URL Gambar</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="https://images.unsplash.com/..."
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="favorite"
            checked={formData.favorite}
            onChange={handleChange}
            className="w-5 h-5 text-pink-500 rounded focus:ring-pink-500"
          />
          <label className="text-sm font-medium text-gray-700">Tandai sebagai Favorit</label>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-pink-500 text-white font-semibold py-3 rounded-lg hover:bg-pink-600 transition"
          >
            Simpan Fashion
          </button>
          <button
            type="button"
            onClick={() => navigate("/fashion-center")}
            className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Batal
          </button>
        </div>

      </form>
    </div>
  );
}