// components/navbar/NavbarDropdownItem.jsx
// @ts-ignore
import React from 'react';
import { NavLink } from 'react-router-dom';

// @ts-ignore
const NavbarDropdownItem = ({ item, close }) => {
  return (
    <NavLink
      to={item.path}
      onClick={close}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
    >
      {item.name}
    </NavLink>
  );
};

export default NavbarDropdownItem;
