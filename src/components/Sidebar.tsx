import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    {
      nome: "Dashboard",
      rota: "/dashboard",
    },
    {
      nome: "Monitoramento",
      rota: "/monitoramento",
    },
    {
      nome: "Relatórios",
      rota: "/relatorios",
    },
    {
      nome: "Perfil",
      rota: "/perfil",
    },
  ];

  return (
    <aside className="min-h-screen w-64 bg-green-800 text-white">
      <div className="border-b border-green-700 p-6">
        {/* importar a logo aqui quando estiver pronta */}
        {/* <img src={logo} alt="greenview" className="mb-4" /> */}

        <h1 className="text-3xl font-bold">
          GreenView
        </h1>

        <p className="text-sm text-green-200">
          Smart Agriculture Monitoring System
        </p>
      </div>

      <nav className="mt-6 flex flex-col">
        {menu.map((item) => (
          <Link
            key={item.rota}
            to={item.rota}
            className={`px-6 py-4 transition ${
              location.pathname === item.rota
                ? "bg-green-700"
                : "hover:bg-green-700"
            }`}
          >
            {item.nome}
          </Link>
        ))}
      </nav>
    </aside>
  );
}