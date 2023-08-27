import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import WomenPage from "../pages/WomenPage/WomenPage";
import FavoritePage from "../pages/FavoritePage/Favorite";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Search from "../pages/Search/Search";
import Product from "../pages/Products/Products";
import ManPage from "../pages/ManPage/ManPage";
import ShoesPage from "../pages/Shoes/ShoesPage";
import DecorLifePage from "../pages/DecorLifePage/DecorLifePage";
import Gif from "../pages/Gif/Gif";
import InsideFendiPage from "../pages/InsideFendiPage/InsideFendiPage";
export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/favorites" element={<FavoritePage />} />
      <Route path="/woman" element={<WomenPage />} />
      <Route path="/shoes" element={<ShoesPage />} />
      <Route path="/man" element={<ManPage />} />
      <Route path="/decor" element={<DecorLifePage />} />
      <Route path="/gift" element={<Gif />} />
      <Route path="/fendi" element={<InsideFendiPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/search" element={<Search />} />
      <Route path="/products/:productId" element={<Product />} />
    </Routes>
  );
}
