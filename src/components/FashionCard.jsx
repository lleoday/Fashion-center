import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function FashionCard({ fashion }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">

      <img
        src={fashion.image}
        alt={fashion.name}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">

        <div className="flex justify-between">

          <h2 className="font-bold text-lg">
            {fashion.name}
          </h2>

          {fashion.favorite ? (
            <FaHeart className="text-pink-500" />
          ) : (
            <FaRegHeart />
          )}

        </div>

        <p className="text-gray-500">
          {fashion.brand}
        </p>

        <div className="flex gap-2 mt-3">

          <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">
            {fashion.category}
          </span>

          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            {fashion.color}
          </span>

        </div>

      </div>

    </div>
  );
}