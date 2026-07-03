import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

// importar logo >>>
// import logo from "../assets/logo.png";

export default function Login() {
  const navigate = useNavigate();

  // simula o login do usuário
  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    navigate("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F7F4] px-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        {/* adicionar logo */}

        {/* <img
          src={logo}
          alt="greenview"
          className="mx-auto mb-6 h-24"
        /> */}

        <h1 className="text-center text-4xl font-bold text-green-700">
          GreenView
        </h1>

        <p className="mt-2 mb-8 text-center text-gray-500">
          Smart Agriculture Monitoring System
        </p>

        {/* formulário */}

        <form onSubmit={handleLogin}>

          <div className="mb-5">

            <label className="mb-2 block text-sm font-medium">
              E-mail
            </label>

            <input
              type="email"
              placeholder="Digite seu e-mail"
              required
              className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-green-700"
            />

          </div>

          <div className="mb-8">

            <label className="mb-2 block text-sm font-medium">
              Senha
            </label>

            <input
              type="password"
              placeholder="Digite sua senha"
              required
              className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-green-700"
            />

          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            Entrar
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          GreenView © 2026 - Todos os direitos reservados
        </p>

      </div>

    </div>
  );
}