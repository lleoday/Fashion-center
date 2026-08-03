import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import FashionCenter from "../pages/FashionCenter";
import AddFashion from "../pages/AddFashion";
import Wishlist from "../pages/Wishlist";
import Statistics from "../pages/Statistics";
import Profile from "../pages/Profile";
import OutfitPlanner from "../pages/OutfitPlanner";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/fashion-center" element={<FashionCenter />} />
          <Route path="/add-fashion" element={<AddFashion />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/outfit-planner" element={<OutfitPlanner />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}