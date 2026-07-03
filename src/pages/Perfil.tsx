
import MainLayout from "../layouts/MainLayout";

// acaba plmds

export default function Perfil() {
  return (
    <MainLayout>
      {/* título da página */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-700">
          Perfil
        </h1>

        <p className="text-gray-500">
          Informações do usuário responsável pelo sistema.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">

        {/* informações do usuário */}

        <section className="col-span-2 rounded-xl bg-white p-6 shadow">

          <h2 className="mb-6 text-xl font-semibold">
            Dados Pessoais
          </h2>

          <div className="grid grid-cols-2 gap-6">

            <div>

              <label className="mb-2 block text-sm font-medium text-gray-600">
                Nome
              </label>

              <input
                type="text"
                value="Edna"
                readOnly
                className="w-full rounded-lg border p-3"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium text-gray-600">
                Cargo
              </label>

              <input
                type="text"
                value="Administrador"
                readOnly
                className="w-full rounded-lg border p-3"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium text-gray-600">
                E-mail
              </label>

              <input
                type="email"
                value="edna@email.com"
                readOnly
                className="w-full rounded-lg border p-3"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium text-gray-600">
                Empresa
              </label>

              <input
                type="text"
                value="GreenView"
                readOnly
                className="w-full rounded-lg border p-3"
              />

            </div>

          </div>

        </section>

        {/* resumo da conta */}

        <section className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-6 text-xl font-semibold">
            Resumo
          </h2>

          <div className="space-y-5">

            <div>

              <p className="text-sm text-gray-500">
                Sensores Monitorados
              </p>

              <p className="text-2xl font-bold text-green-700">
                08
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Relatórios Gerados
              </p>

              <p className="text-2xl font-bold text-green-700">
                24
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Último Acesso
              </p>

              <p className="text-lg font-semibold">
                Hoje
              </p>

            </div>

          </div>

        </section>

      </div>
    </MainLayout>
  );
}