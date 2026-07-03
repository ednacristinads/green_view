import { useNavigate } from "react-router-dom";

// importar a logo 
import logo from "../assets/logo_greew_view.png";

export default function Login() {
  const navigate = useNavigate();

  // simula o login e redireciona para o dashboard
  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-green-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

          {/*<img src={ }alt="logo greenview" className="mx-auto mb-4 h-24" />*/} {/*LOGO - EDITAR*/}

        <h1 className="mb-2 text-center text-4xl font-bold text-green-700">
          GreenView
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Smart Agriculture Monitoring System {/*AVALIAR SE MUDA OU NÃO COM ENZO */}
        </p>

        <form onSubmit={handleLogin}>

          <div className="mb-4">

            <label className="mb-2 block font-medium">
              e-mail
            </label>

            <input
              type="email"
              placeholder="digite seu e-mail"
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-green-700"
            />

          </div>

          <div className="mb-6">

            <label className="mb-2 block font-medium">
              senha
            </label>

            <input
              type="password"
              placeholder="digite sua senha"
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-green-700"
            />

          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-700 p-3 font-semibold text-white transition hover:bg-green-800"
          >
            entrar
          </button>

        </form>

      </div>
    </div>
  );
}