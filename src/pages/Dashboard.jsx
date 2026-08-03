import StatsCard from "../components/StatsCard";
import FashionCard from "../components/FashionCard";
import fashionData from "../data/fashionData";

export default function Dashboard() {
  return (
    <div>

      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Selamat datang kembali 👋
      </p>

      <div className="grid grid-cols-4 gap-5 mt-8">

        <StatsCard
          title="Total Fashion"
          value="156"
          color="text-pink-500"
        />

        <StatsCard
          title="Wishlist"
          value="18"
          color="text-blue-500"
        />

        <StatsCard
          title="Outfit"
          value="42"
          color="text-green-500"
        />

        <StatsCard
          title="Favorite"
          value="27"
          color="text-red-500"
        />

      </div>

      <h2 className="text-2xl font-bold mt-12 mb-5">
        Koleksi Terbaru
      </h2>

      <div className="grid grid-cols-4 gap-6">

        {fashionData.map((fashion) => (
          <FashionCard
            key={fashion.id}
            fashion={fashion}
          />
        ))}

      </div>

    </div>
  );
}