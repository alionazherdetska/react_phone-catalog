import React, { useState } from 'react';
import { AsideMenu } from '../AsideMenu';
import header_logo from '../../assets/icons/nice_gadgets_logo.png';
import header_menu from '../../assets/icons/menu.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <a href="#" className="header--logo">
          <img src={header_logo} alt="Nice Gadgets Logo" />
        </a>

        <a href="#menu" className="header--menu" onClick={toggleMenu}>
          <img src={header_menu} alt="Menu" />
        </a>

        {isMenuOpen && <AsideMenu />}
      </header>
    </>
  );
};

export default Header;
