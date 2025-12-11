// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

const NavBarMobileDropDown = ({
  link,
  openDropdown,
  setOpenDropdown,
  closeMenu,
}) => {
  const isOpen = openDropdown === link.name;

  return (
    <div>
      <button
        onClick={() => setOpenDropdown(isOpen ? null : link.name)}
        className="flex justify-between items-center w-full text-lg font-medium text-gray-800"
      >
        {link.name}
        <MdKeyboardArrowDown
          className={`transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="pl-4 mt-2 flex flex-col gap-2">
          {link.dropdown.map(item => (
            <Link
              key={item.name}
              to={item.path}
              onClick={closeMenu}
              className="text-gray-600 hover:text-orange-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBarMobileDropDown;
