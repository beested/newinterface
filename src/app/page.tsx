'use client';
import Sidebar, { SidebarItem } from '@/components/Sidebar/sidebar';
import { ThemeColorToggle } from '@/components/themeToggle/theme-color-toggle';
import { ThemeModeToggle } from '@/components/themeToggle/theme-mode-toggle';
import {
  BarChart3,
  Boxes,
  LayoutDashboard,
  LifeBuoy,
  Package,
  Receipt,
  Settings,
  UserCircle,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem
          id="dashboard"
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          alert
        />
        <SidebarItem
          id="statics"
          icon={<BarChart3 size={20} />}
          text="Statics"
        />
        <SidebarItem id="users" icon={<UserCircle size={20} />} text="Users" />
        <SidebarItem
          id="inventory"
          icon={<Boxes size={20} />}
          text="Inventory"
        />
        <SidebarItem id="orders" icon={<Package size={20} />} text="Orders" />
        <SidebarItem
          id="billings"
          icon={<Receipt size={20} />}
          text="Billings"
          alert
        />
        <hr className="my-3" />
        <SidebarItem
          id="settings"
          icon={<Settings size={20} />}
          text="Settings"
          alert
        />
        <SidebarItem
          id="help"
          icon={<LifeBuoy size={20} />}
          text="Help"
          alert
        />
      </Sidebar>
      <div className="flex justify-between pb-4 w-[1016px]">
        <ThemeColorToggle />
        <ThemeModeToggle />
      </div>
    </div>
  );
}
