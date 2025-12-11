// @ts-nocheck
import navLinks from 'Data-center/navLinksData';
import { useState } from 'react';
import NavBarActions from './NavBarActions';
import NavBarMobileLinks from './NavBarMobileLinks';
import NavBarLogo from './NavBarLogo';
import NavBarMobile from './NavBarMobile';
import NavbarLinksDesktop from './NavBarLinksDesktop';

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-secondary fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto w-[95%] lg:w-[85%] py-4">
        {/* Desktop */}
        <div className="hidden lg:flex justify-between  items-center">
          <NavBarLogo />

          <NavbarLinksDesktop
            navLinks={navLinks}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />

          <NavBarMobileLinks
            navLinks={navLinks}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />

          <NavBarActions />
        </div>

        {/* Mobile */}
        <NavBarMobile
          navLinks={navLinks}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>
    </nav>
  );
};

export default NavBar;
