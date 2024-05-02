import React, { useState } from 'react';
import header_logo from '../../assets/icons/nice_gadgets_logo.png';
import close from '../../assets/icons/Icons_Close.png';
import like from '../../assets/icons/heart.svg';
import cart from '../../assets/icons/shopping-cart.svg';

const AsideMenu: React.FC = () => {
  const [isClosed, setIsClosed] = useState(false);

  const toggleClose = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div className="aside-menu">
      <header className="aside-menu__header">
        <a href="#" className="aside-menu__header__logo">
          <img src={header_logo} alt="Nice Gadgets Logo" />
        </a>

        <a href="#" className="aside-menu__header__close" onClick={toggleClose}>
          <img src={close} alt="Menu" />
        </a>
      </header>

      <nav className="aside-menu__nav">
        <ul className="aside-menu__nav__list">
          <a className="aside-menu__nav__list__link" href="#">
            Home
          </a>

          <a className="aside-menu__nav__list__link" href="#phones">
            Phones
          </a>

          <a className="aside-menu__nav__list__link" href="#about-us">
            Tablets
          </a>

          <a className="aside-menu__nav__list__link" href="#about-us">
            Accessories
          </a>
        </ul>
      </nav>

      <div className="aside-menu__bottom">
        <a href="#favorites" className="aside-menu__bottom__like">
          <img src={like} alt="Favorite" />
        </a>

        <a href="#cart" className="aside-menu__bottom__cart">
          <img src={cart} alt="Shopping cart" />
        </a>
      </div>
    </div>
  );
};

export default AsideMenu;
