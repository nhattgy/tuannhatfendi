import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import WomenPage from "../pages/WomenPage/WomenPage";
import FavoritePage from "../pages/FavoritePage/Favorite";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/favorites" element={<FavoritePage />} />
      <Route path="/woman" element={<WomenPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
