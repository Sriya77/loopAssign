import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  Receipt, 
  BarChart2, 
  Megaphone, 
  Clock, 
  Settings, 
  HelpCircle, 
  Moon,
  X 
} from 'lucide-react';

interface SidebarProps {
  onClose?: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, text: 'Overview', active: true },
  { icon: Package, text: 'Product' },
  { icon: Users, text: 'Customer' },
  { icon: Receipt, text: 'Transaction' },
  { icon: BarChart2, text: 'Statistics' },
  { icon: Megaphone, text: 'Campaign', badge: 'New' },
  { icon: Clock, text: 'Log Activity' },
];

const settingsItems = [
  { icon: Settings, text: 'Setting' },
  { icon: HelpCircle, text: 'Help' },
];

export default function Sidebar({ onClose }: SidebarProps) {
  return (
    <div className="fixed md:static inset-y-0 left-0 z-50 w-64 bg-white h-screen p-4 flex flex-col shadow-lg md:shadow-none">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          <span className="text-xl font-bold">LOOP</span>
        </div>
        <button onClick={onClose} className="md:hidden">
          <X size={24} />
        </button>
      </div>
      
      <div className="text-sm text-gray-400 mb-4">MENU</div>
      
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center gap-3 p-3 rounded-lg ${
              item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon size={20} />
            <span>{item.text}</span>
            {item.badge && (
              <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                {item.badge}
              </span>
            )}
          </a>
        ))}
      </nav>

      <div className="text-sm text-gray-400 mt-8 mb-4">SETTINGS</div>
      
      <nav className="space-y-2">
        {settingsItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:bg-gray-50"
          >
            <item.icon size={20} />
            <span>{item.text}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto flex items-center gap-3 p-3">
        <Moon size={20} />
        <span>Dark Mode</span>
        <div className="ml-auto">
          <div className="w-10 h-6 bg-gray-200 rounded-full relative">
            <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}