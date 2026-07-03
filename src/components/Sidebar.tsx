import { Link, useLocation, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png"

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

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

  // volta para a tela de login
  function handleLogout() {
    navigate("/");
  }

  return (
    <aside className="flex min-h-screen w-64 flex-col bg-green-800 text-white">
      <div className="border-b border-green-700 p-6">

        {/* importar a logo, se for colocar, né?*/}
        {/* <img src={logo} alt="greenview" className="mb-4" /> */}

        <h1 className="text-3xl font-bold">
          GreenView
        </h1>

        <p className="text-sm text-green-200">
          Smart Agriculture Monitoring System
        </p>
      </div>

      <nav className="mt-6 flex flex-1 flex-col">
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

      <div className="mt-auto p-6">
        <button
          onClick={handleLogout}
          className="w-full rounded-lg border border-white bg-white py-3 font-semibold text-green-800 transition hover:bg-gray-100"
        >
          Sair
        </button>
      </div>
    </aside>
  );
}