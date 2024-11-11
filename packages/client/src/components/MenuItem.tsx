import { FC } from 'react';
import { ChevronDown } from 'lucide-react';

interface MenuItemProps {
  title: string;
  submenu?: string[];
}

const MenuItem: FC<MenuItemProps> = ({ title, submenu }) => (
  <div className="relative group">
    <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none">
      {title}
      {submenu && <ChevronDown className="inline-block ml-1 w-4 h-4" />}
    </button>
    {submenu && (
      <div
        className="absolute z-50 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {submenu.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default MenuItem;