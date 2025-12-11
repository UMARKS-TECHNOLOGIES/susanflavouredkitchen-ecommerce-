// @ts-nocheck
import React from 'react';
import NavBarDropdown from './NavBarlinkDropDown';
import NavbarLinkItem from './NavBarLinkItem';

const NavbarLinksDesktop = ({ navLinks, openDropdown, setOpenDropdown }) => {
  return (
    <div className="flex items-center justify-center text-center">
      {navLinks.map(link =>
        link.dropdown ? (
          <NavBarDropdown
            key={link.name}
            link={link}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />
        ) : (
          <NavbarLinkItem key={link.name} link={link} />
        )
      )}
    </div>
  );
};

export default NavbarLinksDesktop;
