export default function Dashboard() {
  return (
    <div>
      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Selamat datang kembali 👋
      </p>

      <div className="grid grid-cols-4 gap-5 mt-10">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Total Fashion</h2>
          <p className="text-3xl font-bold mt-2">156</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Wishlist</h2>
          <p className="text-3xl font-bold mt-2">18</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Outfit</h2>
          <p className="text-3xl font-bold mt-2">42</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Favorite</h2>
          <p className="text-3xl font-bold mt-2">27</p>
        </div>
      </div>
    </div>
  );
}