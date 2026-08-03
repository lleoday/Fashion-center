import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 ml-64 bg-gray-100 min-h-screen">

        <div className="p-6">

          <Navbar />

          <div className="mt-8">

            {children}

          </div>

        </div>

      </div>

    </div>
  );
}