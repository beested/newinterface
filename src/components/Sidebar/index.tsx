import {
  Clipboard,
  DollarSign,
  Factory,
  LayoutDashboard,
  LifeBuoy,
  Package,
  Receipt,
  Scale,
  SettingsIcon,
  ShieldIcon,
  ShoppingBag,
  ShoppingCart,
  Tag,
  TrendingDown,
  TrendingUp,
  Truck,
  User,
  UserIcon,
  Users,
} from 'lucide-react';
import Sidebar, { SidebarItem, SidebarSubItem } from './sidebar';

export default function SidebarComponent({}) {
  return (
    <Sidebar>
      <SidebarItem
        id="dashboard"
        icon={<LayoutDashboard size={20} />}
        text="Dashboard"
        alert
      />
      <SidebarItem id="person" icon={<Users size={20} />} text="Pessoas">
        <SidebarItem id="clients" icon={<User size={20} />} text="Clientes" />
        <SidebarItem
          id="clients"
          icon={<Factory size={20} />}
          text="Fornecedores"
        />
        <SidebarItem
          id="clients"
          icon={<Truck size={20} />}
          text="Transportadoras"
        />
      </SidebarItem>
      <SidebarItem id="product" icon={<Package size={20} />} text="Produtos">
        <SidebarSubItem
          id="products"
          icon={<Package size={20} />}
          text="Produtos"
        />
        <SidebarSubItem
          id="units"
          icon={<Scale size={20} />}
          text="Unidades de Medida"
        />
        <SidebarSubItem id="brands" icon={<Tag size={20} />} text="Marcas" />
      </SidebarItem>
      <SidebarItem
        id="finance"
        icon={<DollarSign size={20} />}
        text="Financeiro"
      >
        <SidebarSubItem
          id="accountsReceive"
          icon={<TrendingUp size={20} />}
          text="Contas à Receber"
        />
        <SidebarSubItem
          id="accountsPay"
          icon={<TrendingDown size={20} />}
          text="Contas à Pagar"
        />

        <SidebarSubItem
          id="receipts"
          icon={<Receipt size={20} />}
          text="Recibos"
        />
      </SidebarItem>

      <SidebarItem id="sales" icon={<ShoppingBag size={20} />} text="Vendas">
        <SidebarItem
          id="inventory"
          icon={<Clipboard size={20} />}
          text="Orçamento"
        />
      </SidebarItem>
      <SidebarItem
        id="buy"
        icon={<ShoppingCart size={20} />}
        text="Compras"
        alert
      />
      <hr className="my-3" />
      <SidebarItem
        id="settings"
        icon={<SettingsIcon size={20} />}
        text="Settings"
      >
        <SidebarSubItem
          id="profile"
          icon={<UserIcon size={20} />}
          text="Profile"
        />
        <SidebarSubItem
          id="security"
          icon={<ShieldIcon size={20} />}
          text="Security"
        />
      </SidebarItem>
      <SidebarItem id="help" icon={<LifeBuoy size={20} />} text="Help" alert />
    </Sidebar>
  );
}
