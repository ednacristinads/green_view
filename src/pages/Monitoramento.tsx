import MainLayout from "../layouts/MainLayout";

export default function Monitoramento() {
  return (
    <MainLayout>
      {/* título da página */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-700">
          Monitoramento
        </h1>

        <p className="text-gray-500">
          Acompanhe os sensores em tempo real.
        </p>
      </div>

      {/* tabela dos sensores */}

      <section className="rounded-xl bg-white p-6 shadow">
        <table className="w-full text-left">

          <thead>

            <tr className="border-b">

              <th className="pb-3">Sensor</th>

              <th className="pb-3">Localização</th>

              <th className="pb-3">Umidade</th>

              <th className="pb-3">Temperatura</th>

              <th className="pb-3">Status</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b">

              <td className="py-4">Sensor 01</td>

              <td>Setor Norte</td>

              <td>48%</td>

              <td>29 °C</td>

              <td className="text-green-700 font-medium">
                Online
              </td>

            </tr>

            <tr className="border-b">

              <td className="py-4">Sensor 02</td>

              <td>Setor Sul</td>

              <td>52%</td>

              <td>28 °C</td>

              <td className="text-green-700 font-medium">
                Online
              </td>

            </tr>

            <tr>

              <td className="py-4">Sensor 03</td>

              <td>Estufa</td>

              <td>--</td>

              <td>--</td>

              <td className="font-medium text-red-600">
                Offline
              </td>

            </tr>

          </tbody>

        </table>
      </section>

      {/* resumo do monitoramento */}

      <div className="mt-8 grid grid-cols-3 gap-6">

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-2 text-lg font-semibold">
            Sensores Online
          </h2>

          <p className="text-3xl font-bold text-green-700">
            08
          </p>

        </div>

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-2 text-lg font-semibold">
            Sensores Offline
          </h2>

          <p className="text-3xl font-bold text-red-600">
            01
          </p>

        </div>

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-2 text-lg font-semibold">
            Última Atualização
          </h2>

          <p className="text-3xl font-bold text-green-700">
            17:30
          </p>

        </div>

      </div>
    </MainLayout>
  );
}