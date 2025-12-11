// @ts-nocheck
// components/navbar/NavbarCartIcon.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import useCart from 'hooks/useCart';

const NavBarCartIcon = () => {
  const totalItems = useCart().getTotalItems();

  return (
    <div className="relative">
      <Link to="/cart">
        <GiShoppingCart className="text-2xl text-gray-600" />
      </Link>

      {totalItems > 0 && (
        <span className="bg-orange-600 w-5 h-5 text-xs font-medium flex items-center justify-center absolute rounded-full -top-2 -right-2 text-white">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </div>
  );
};

export default NavBarCartIcon;
