// @ts-nocheck
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLinkItem = ({ link }) => {
  return (
    <NavLink
      to={link.href}
      className={({ isActive }) =>
        isActive
          ? 'text-orange-400 mx-4 text-lg'
          : 'text-[#343333] hover:text-[#00004d] px-5 py-2 text-lg'
      }
    >
      {link.name}
    </NavLink>
  );
};

export default NavbarLinkItem;
