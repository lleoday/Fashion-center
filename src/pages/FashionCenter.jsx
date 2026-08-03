import { useState } from "react";
import fashionData from "../data/fashionData";
import FashionCard from "../components/FashionCard";

export default function FashionCenter() {

  const [search, setSearch] = useState("");

  const filteredFashion = fashionData.filter((fashion) =>
    fashion.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h1 className="text-4xl font-bold">
        Fashion Center
      </h1>

      <p className="text-gray-500 mt-2">
        Semua koleksi fashion kamu.
      </p>

      <div className="flex justify-between items-center mt-8">

  <input
    type="text"
    placeholder="Cari fashion..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-96 border border-gray-300 rounded-xl p-3 shadow-sm"
  />

  <button
    className="bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600"
  >
    + Tambah Fashion
  </button>

</div>

      <div className="grid grid-cols-4 gap-6 mt-8">

        {filteredFashion.map((fashion) => (
          <FashionCard
            key={fashion.id}
            fashion={fashion}
          />
        ))}

      </div>

    </div>
  );
}