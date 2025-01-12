import React from 'react';
import { LucideIcon } from 'lucide-react';
interface NavItemProps {
    icon: LucideIcon; // The Icon component
    label: string;    // The label text
    onClick: () => void; // The click handler
  }
  

const  NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center space-x-2"
  >
    <Icon size={14} />
    <span>{label}</span>
  </button>
);

export default NavItem;
