export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between bg-white px-8 shadow">
      <div>
        <h2 className="text-2xl font-bold text-green-700">
          GreenView
        </h2>

        <p className="text-sm text-gray-500">
          Smart Agriculture Monitoring System
        </p>
      </div>

      {/*cabeçario */}
      <div className="text-right">
        <p className="font-semibold">
          Gustavo Tubarão
        </p>

        <p className="text-sm text-gray-500">
          Administrador
        </p>
      </div>
    </header>
  );
}