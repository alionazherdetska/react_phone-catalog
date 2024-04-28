import React, { useState } from 'react';
import { AsideMenu } from '../AsideMenu';
import header_logo from '../../assets/icons/nice_gadgets_logo.png';
import header_menu from '../../assets/icons/menu.svg';
import like from '../../assets/icons/heart.svg';
import cart from '../../assets/icons/shopping-cart.svg';

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

        <nav className="header__nav">
          <ul className="header__nav__list">
            <a className="header__nav__list__link" href="#">
              Home
            </a>
            <a className="header__nav__list__link" href="#phones">
              Phones
            </a>
            <a className="header__nav__list__link" href="#about-us">
              Tablets
            </a>
            <a className="header__nav__list__link" href="#about-us">
              Accessories
            </a>
          </ul>
        </nav>

        <div className="header__end">
          <a href="#favorites" className="header__end__like">
            <img src={like} alt="Favorite" />
          </a>
          <a href="#cart" className="header__end__cart">
            <img src={cart} alt="Shopping cart" />
          </a>
        </div>
        <a href="#menu" className="header--menu" onClick={toggleMenu}>
          <img src={header_menu} alt="Menu" />
        </a>

        {isMenuOpen && <AsideMenu />}
      </header>
    </>
  );
};

export default Header;
