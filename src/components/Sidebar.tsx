import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-56 min-h-screen bg-green-700 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">GreenView</h1>

      <nav className="flex flex-col gap-4">
        <Link to="/dashboard">Dashboard</Link>

        <Link to="/monitoring">Monitoramento</Link>

        <Link to="/reports">Relatórios</Link>

        <Link to="/profile">Perfil</Link>
      </nav>
    </aside>
  );
}