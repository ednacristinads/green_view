import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#F5F7F4]">
      <Sidebar />

      <div className="flex-1">
        <Header />

        {/* conteúdo das páginas, etc */}

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}