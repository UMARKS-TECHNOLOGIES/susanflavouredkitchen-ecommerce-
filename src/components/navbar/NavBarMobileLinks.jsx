// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineSearch } from 'react-icons/md';
import NavBarMobileDropDown from './NavBarMobileDropDown';

const NavBarMobileLinks = ({
  navLinks,
  openDropdown,
  setOpenDropdown,
  closeMenu,
}) => {
  return (
    <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-4 h-screen overflow-y-auto pb-20">
      {navLinks.map(link => (
        <div key={link.name} className="border-b border-gray-100 pb-2">
          {link.dropdown ? (
            <NavBarMobileDropDown
              link={link}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
              closeMenu={closeMenu}
            />
          ) : (
            <Link
              to={link.href}
              onClick={closeMenu}
              className="block text-lg font-medium text-gray-800 hover:text-orange-600"
            >
              {link.name}
            </Link>
          )}
        </div>
      ))}

      <Link
        to="/menu"
        className="flex items-center gap-2 text-lg font-medium text-gray-800 border-b border-gray-100 pb-1"
      >
        <MdOutlineSearch className="text-2xl" /> Search
      </Link>
    </div>
  );
};

export default NavBarMobileLinks;
