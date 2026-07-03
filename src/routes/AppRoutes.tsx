import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Monitoring from "../pages/Monitoring";
import Reports from "../pages/Reports";
import Profile from "../pages/Perfil";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/profile" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}