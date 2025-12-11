// @ts-nocheck
// components/navbar/NavbarMobile.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.jpeg';
import { MdClose, MdMenu } from 'react-icons/md';
import NavBarCartIcon from './NavBarCartIcon';
import NavBarMobileLinks from './NavBarMobileLinks';

const NavBarMobile = ({
  navLinks,
  openDropdown,
  setOpenDropdown,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  return (
    <>
      {/* Header */}
      <div className="flex lg:hidden justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-10" />
        </Link>

        <div className="flex items-center gap-4">
          <NavBarCartIcon />

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-3xl text-gray-700"
          >
            {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <NavBarMobileLinks
          navLinks={navLinks}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          closeMenu={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default NavBarMobile;
