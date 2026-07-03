import MainLayout from "../layouts/MainLayout";

interface CardProps {
  titulo: string;
  valor: string;
}

// cards de indicadores
function Card({ titulo, valor }: CardProps) {
  return (
    <div className="rounded-xl bg-white p-5 shadow">
      <p className="text-sm text-gray-500">{titulo}</p>

      <h2 className="mt-2 text-3xl font-bold text-green-700">
        {valor}
      </h2>
    </div>
  );
}

export default function Dashboard() {
  return (
    <MainLayout>
      {/* indicadores principais do sistema */}

      <div className="grid grid-cols-4 gap-6">
        <Card titulo="Umidade do Solo" valor="48%" />

        <Card titulo="Temperatura" valor="29 °C" />

        <Card titulo="Sensores Ativos" valor="08" />

        <Card titulo="Economia de Água" valor="18%" />
      </div>

      {/* área principal */}

      <div className="mt-8 grid grid-cols-2 gap-6">
        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold">
            Gráfico de Monitoramento
          </h2>

          {/*  adicionar gráfico */}

          <div className="flex h-72 items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
            Área destinada ao gráfico
          </div>
        </section>

        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold">
            Monitoramento
          </h2>

          {/* tabela com o status dos sensores */}

          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="pb-2">Sensor</th>

                <th className="pb-2">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-3">Sensor 01</td>

                <td>Online</td>
              </tr>

              <tr className="border-b">
                <td className="py-3">Sensor 02</td>

                <td>Online</td>
              </tr>

              <tr>
                <td className="py-3">Sensor 03</td>

                <td>Offline</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      {/* informações complementares */}

      <div className="mt-8 grid grid-cols-3 gap-6">
        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-lg font-semibold">
            Alertas
          </h2>

          <p>Solo com baixa umidade.</p>

          <p>Sensor 03 desconectado.</p>
        </section>

        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-lg font-semibold">
            Previsão do Tempo
          </h2>

          <p>Temperatura: 30 °C</p>

          <p>Umidade: 72%</p>

          <p>Sem previsão de chuva.</p>
        </section>

        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-lg font-semibold">
            Relatórios
          </h2>

          {/* botões para geração de relatórios */}

          <button className="mb-3 w-full rounded-lg bg-green-700 py-2 text-white">
            Relatório Diário
          </button>

          <button className="mb-3 w-full rounded-lg bg-green-700 py-2 text-white">
            Relatório Semanal
          </button>

          <button className="w-full rounded-lg bg-green-700 py-2 text-white">
            Exportar PDF
          </button>
        </section>
      </div>
    </MainLayout>
  );
}