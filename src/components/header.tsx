export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between bg-white px-8 shadow">
      <div>
        <h2 className="text-2xl font-bold text-gray-700">
          Dashboard
        </h2>

        <p className="text-sm text-gray-500">
          Sistema de Monitoramento Agrícola
        </p>
      </div>

      <div className="text-right">
        <p className="font-semibold">
          Gustavo Cavalo Marinho
        </p>

        <p className="text-sm text-gray-500">
          Administrador
        </p>
      </div>
    </header>
  );
}