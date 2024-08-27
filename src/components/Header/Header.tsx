'use client';
import { ThemeColorToggle } from '@/components/themeToggle/theme-color-toggle';
import { ThemeModeToggle } from '@/components/themeToggle/theme-mode-toggle';
import { Settings } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export const Header = () => {
  return (
    <header className="sticky top-0 left-80 right-0 bg-white bg-opacity-80 shadow-md">
      <div className="flex justify-between items-center p-2">
        <div className="flex-1 flex gap-2 items-center">
          <h1 className="text-sm font-bold text-gray-600">
            Empresa demonstração
          </h1>
          <Badge className="bg-primary/80">Gratís</Badge>
        </div>
        <div className="flex space-x-4 items-center">
          <ThemeColorToggle />
          <ThemeModeToggle />
          <Button
            variant="outline"
            size="icon"
            className="border rounded-full p-2 flex items-center justify-center"
          >
            {' '}
            <Settings
              className="h-[1.2rem] w-[1.2rem] text-gray-600"
              style={{
                animation: 'spin-slow 10s linear infinite',
              }}
            />
          </Button>
        </div>
      </div>
      <style jsx global>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </header>
  );
};
