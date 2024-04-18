import React from 'react';
import { AsideMenu } from '../AsideMenu';

const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <a href="#" className="header--logo">
          <img src="/icons/nice_gadgets_logo.png" alt="Nice Gadgets Logo" />
        </a>
        <a href="#menu" className="header--menu">
          <img src="/icons/menu.svg" alt="Nice Gadgets Logo" />
        </a>
      </header>
      <AsideMenu />
    </>
  );
};

export default Header;
