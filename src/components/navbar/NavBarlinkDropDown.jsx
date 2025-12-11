// components/navbar/NavbarDropdown.jsx
// @ts-ignore
import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import NavbarDropdownItem from './NavBarDropDownItem';

// @ts-ignore
const NavBarDropdown = ({ link, openDropdown, setOpenDropdown }) => {
  const isOpen = openDropdown === link.name;

  return (
    <div className="relative">
      <button
        onClick={() => setOpenDropdown(isOpen ? null : link.name)}
        className={`px-4 py-2 font-medium flex items-center gap-1 ${
          isOpen ? 'text-orange-600' : 'text-[#343333]'
        }`}
      >
        {link.name}
        <
// @ts-ignore
        MdKeyboardArrowDown
          className={`text-lg transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 border border-gray-100 z-50">
          {link.dropdown.map(
// @ts-ignore
          item => (
            <NavbarDropdownItem
              key={item.name}
              item={item}
              close={() => setOpenDropdown(null)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBarDropdown;
