import MainLayout from "../layouts/MainLayout";

export default function Dashboard() {
  return (
    <MainLayout>

      {/* cards com os principais indicadores */}
      <div className="grid grid-cols-4 gap-4">

        <Card titulo="Umidade" valor="48%" />

        <Card titulo="Temperatura" valor="29°C" />

        <Card titulo="Água" valor="18%" />

        <Card titulo="Agenda" valor="17h" />

      </div>

      {/* area principal */}
      <div className="mt-6 grid grid-cols-2 gap-6">

        <div className="h-80 rounded bg-white p-4 shadow">

          <h2 className="mb-4 text-xl font-semibold">
            Gráfico
          </h2>

        </div>

        <div className="h-80 rounded bg-white p-4 shadow">

          <h2 className="mb-4 text-xl font-semibold">
            Monitoramento
          </h2>

        </div>

      </div>

      <div className="mt-6 grid grid-cols-2 gap-6">

        <div className="h-40 rounded bg-white p-4 shadow">

          Alertas

        </div>

        <div className="h-40 rounded bg-white p-4 shadow">

          Previsão do tempo

        </div>

      </div>

      <div className="mt-6 grid grid-cols-2 gap-6">

        <div className="h-40 rounded bg-white p-4 shadow">

          Relatórios

        </div>

        <div className="h-40 rounded bg-white p-4 shadow">

          Inteligência Sistêmica

        </div>

      </div>

    </MainLayout>
  );
}

interface CardProps {
  titulo: string;
  valor: string;
}

// card customizavel
function Card({ titulo, valor }: CardProps) {
  return (
    <div className="rounded bg-white p-4 shadow">

      <p className="text-gray-500">
        {titulo}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-green-700">
        {valor}
      </h2>

    </div>
  );
}