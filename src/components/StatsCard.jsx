export default function StatsCard({
  title,
  value,
  color,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <p className="text-gray-500">
        {title}
      </p>

      <h1
        className={`text-4xl font-bold mt-2 ${color}`}
      >
        {value}
      </h1>

    </div>
  );
}