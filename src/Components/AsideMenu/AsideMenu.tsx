import React, { useState } from 'react';
import header_logo from '../../assets/icons/nice_gadgets_logo.png';
import close from '../../assets/icons/Icons_Close.png';

const AsideMenu: React.FC = () => {
  const [isClosed, setIsClosed] = useState(false);

  const toggleClose = () => {
    setIsClosed(!isClosed);
  };

  return (
    <>
      <header className="aside-menu__header">
        <a href="#" className="aside-menu__header__logo">
          <img src={header_logo} alt="Nice Gadgets Logo" />
        </a>

        <a href="#" className="aside-menu__header__close" onClick={toggleClose}>
          <img src={close} alt="Menu" />
        </a>
      </header>

      {/* <nav class="nav menu__nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a class="nav__link" href="#about-us">About us</a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#">Home</a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#work">Work</a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#services">Services</a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#contact-us">Contact us</a>
          </li>
        </ul>
      </nav> */}

      <nav className="aside-menu__nav">
        <ul className="aside-menu__nav__list">
          <li>Home</li>
          <li>Phones</li>
          <li>Tablets</li>
          <li>Accessories</li>
        </ul>
      </nav>
    </>
  );
};

export default AsideMenu;
