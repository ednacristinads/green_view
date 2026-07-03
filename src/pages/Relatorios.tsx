import MainLayout from "../layouts/MainLayout";

export default function Relatorios() {
  return (
    <MainLayout>
      {/* título da página */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-700">
          Relatórios
        </h1>

        <p className="text-gray-500">
          Visualize e exporte os relatórios do sistema.
        </p>
      </div>

      {/* opções de relatórios */}

      <div className="grid grid-cols-3 gap-6">

        <section className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-4 text-xl font-semibold">
            Relatório Diário
          </h2>

          <p className="mb-6 text-gray-500">
            Informações coletadas nas últimas 24 horas.
          </p>

          <button className="w-full rounded-lg bg-green-700 py-2 text-white hover:bg-green-800">
            Gerar Relatório
          </button>

        </section>

        <section className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-4 text-xl font-semibold">
            Relatório Semanal
          </h2>

          <p className="mb-6 text-gray-500">
            Dados consolidados da última semana.
          </p>

          <button className="w-full rounded-lg bg-green-700 py-2 text-white hover:bg-green-800">
            Gerar Relatório
          </button>

        </section>

        <section className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-4 text-xl font-semibold">
            Relatório Mensal
          </h2>

          <p className="mb-6 text-gray-500">
            Histórico completo do mês.
          </p>

          <button className="w-full rounded-lg bg-green-700 py-2 text-white hover:bg-green-800">
            Gerar Relatório
          </button>

        </section>

      </div>

      {/* histórico de exportações */}

      <section className="mt-8 rounded-xl bg-white p-6 shadow">

        <h2 className="mb-4 text-xl font-semibold">
          Histórico
        </h2>

        <table className="w-full text-left">

          <thead>

            <tr className="border-b">

              <th className="pb-3">Relatório</th>

              <th className="pb-3">Data</th>

              <th className="pb-3">Formato</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b">

              <td className="py-4">
                Diário
              </td>

              <td>
                03/07/2026
              </td>

              <td>
                PDF
              </td>

            </tr>

            <tr className="border-b">

              <td className="py-4">
                Semanal
              </td>

              <td>
                01/07/2026
              </td>

              <td>
                PDF
              </td>

            </tr>

            <tr>

              <td className="py-4">
                Mensal
              </td>

              <td>
                30/06/2026
              </td>

              <td>
                PDF
              </td>

            </tr>

          </tbody>

        </table>

      </section>
    </MainLayout>
  );
} 

// não aguento mais