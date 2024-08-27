'use client';
import { Header } from '@/components/Header/Header';
import SidebarComponent from '@/components/Sidebar';
import { ThemeColorToggle } from '@/components/themeToggle/theme-color-toggle';
import { ThemeModeToggle } from '@/components/themeToggle/theme-mode-toggle';

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <SidebarComponent />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 bg-gray-100">
          <div className="flex justify-between pb-4">
            <ThemeColorToggle />
            <ThemeModeToggle />
          </div>
          {/* Conteúdo principal vai aqui */}
          <p>Conteúdo da página...</p>
        </main>
      </div>
    </div>
  );
}
