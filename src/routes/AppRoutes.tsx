import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Monitoramento from "../pages/Monitoramento";
import Relatorios from "../pages/Relatorios";
import Perfil from "../pages/Perfil";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/monitoramento" element={<Monitoramento />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter> //psipsipsipsi
  );
}