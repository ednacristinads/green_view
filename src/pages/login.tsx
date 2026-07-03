import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // Simulacao do login >>> Dash
  function handleLogin() {
    navigate("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-green-100">
      <div className="w-[420px] rounded-xl bg-white p-8 shadow-lg">

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-green-700">
            GreenView
          </h1>

          <p className="text-gray-500">
            Smart Agriculture Monitoring System
          </p>
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-medium">
            E-mail
          </label>

          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="w-full rounded border p-3"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-medium">
            Senha
          </label>

          <input
            type="password"
            placeholder="Digite sua senha"
            className="w-full rounded border p-3"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full rounded bg-green-700 p-3 font-semibold text-white transition hover:bg-green-800"
        >
          Entrar
        </button>

      </div>
    </div>
  );
}