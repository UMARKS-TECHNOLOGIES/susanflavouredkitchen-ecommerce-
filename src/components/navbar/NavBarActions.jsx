// @ts-nocheck
import { Link } from 'react-router-dom';
import { MdOutlineSearch } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import NavBarCartIcon from './NavBarCartIcon';

const NavBarActions = () => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <Link to="/menu">
        <MdOutlineSearch className="text-2xl text-gray-600" />
      </Link>

      <Link to="/login">
        <BsPerson className="text-2xl text-gray-600" />
      </Link>

      <NavBarCartIcon />
    </div>
  );
};

export default NavBarActions;
