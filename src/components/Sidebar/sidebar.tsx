import {
  ChevronDown,
  ChevronFirst,
  ChevronLast,
  ChevronRight,
  MoreVertical,
} from 'lucide-react';
import { createContext, ReactNode, useContext, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface SidebarContextProps {
  expanded: boolean;
  toggleExpanded: () => void;
  selectedItem: string | null;
  selectItem: (item: string) => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

interface SidebarProps {
  children: ReactNode;
}

interface SidebarItemProps {
  id: string; // Identificador único para cada item
  icon: ReactNode;
  text: string;
  alert?: boolean;
}

export default function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleExpanded = () => {
    setExpanded((curr) => !curr);
  };

  const selectItem = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <SidebarContext.Provider
      value={{ expanded, toggleExpanded, selectedItem, selectItem }}
    >
      <aside className="h-screen">
        <nav className="h-full flex flex-col text-primary dark:text-primary border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <img
              src="https://img.logoipsum.com/243.svg"
              className={`overflow-hidden transition-all ${
                expanded ? 'w-32' : 'w-0'
              }`}
              alt=""
            />
            <button
              className="p-1.5 rounded-lg text-primary/50 hover:text-primary/80"
              onClick={toggleExpanded}
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>
          <ul className="flex-1 px-3">{children}</ul>
          <div className="border-t flex p-3">
            <Avatar className="rounded-lg w-10 h-10">
              <AvatarFallback className="w-full h-full">BR</AvatarFallback>
              <AvatarImage
                src="https://github.com/beested.png"
                className="w-full h-full object-cover"
              />
            </Avatar>
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expanded ? 'w-52 ml-3' : 'w-0'
              }`}
            >
              <div className="leading-4">
                <h4 className="font-semibold">Bruno Beested</h4>
                <span className="text-xs text-primary/70">
                  bruno.paim@windel.com.br
                </span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </SidebarContext.Provider>
  );
}
export function SidebarItem({
  id,
  icon,
  text,
  alert,
  children,
}: SidebarItemProps & { children?: ReactNode }) {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('SidebarItem must be used within a SidebarContext');
  }

  const { expanded, selectedItem, selectItem } = context;
  const isActive = selectedItem === id;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (children) {
      setIsOpen(!isOpen);
    }
    selectItem(id);
  };

  return (
    <li className="relative">
      <div
        className={`
    flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group
    ${
      isActive
        ? 'bg-gradient-to-tr from-primary/40 to-primary/10 text-primary-100'
        : 'hover:bg-primary/40 text-gray-600  dark:text-gray-400'
    }
  `}
        onClick={handleToggle}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? 'w-52 ml-3' : 'w-0'
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-primary ${
              expanded ? '' : 'top-2'
            }`}
          ></div>
        )}
        {!expanded && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-primary/20 text-primary text-sm invisible opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100`}
          >
            {text}
          </div>
        )}
        {children && expanded && (
          <span className="ml-auto text-gray-400">
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
        )}
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {children && expanded && <ul className="pl-6">{children}</ul>}
      </div>
    </li>
  );
}
export function SidebarSubItem({ id, text, icon, alert }: SidebarItemProps) {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('SidebarSubItem must be used within a SidebarContext');
  }

  const { selectedItem, selectItem } = context;
  const isActive = selectedItem === id;

  return (
    <li
      className={`
      flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${
        isActive
          ? 'bg-gradient-to-tr from-primary/40 to-primary/10 text-primary-100'
          : 'hover:bg-primary/40 text-gray-600  dark:text-gray-400'
      }
    `}
      onClick={() => selectItem(id)}
    >
      {icon}
      <span className="ml-3">{text}</span>
      {alert && <div className="ml-auto w-2 h-2 rounded-full bg-red-500"></div>}
    </li>
  );
}
