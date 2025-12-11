import { Link } from 'react-router-dom';
import image from '../../assets/Logo.jpeg';

const NavBarLogo = () => {
  return (
    <div className={'max-h-[4rem]'} to="/">
      <img src={image} width={'70px'} alt="Logo" className="size-13" />
    </div>
  );
};

export default NavBarLogo;
