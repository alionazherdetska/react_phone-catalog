import React from 'react';
import footer_logo from '../../assets/icons/nice_gadgets_logo.png';
import slider_black from '../../assets/icons/slider_black.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <a href="#">
        <img
          className="footer__img"
          src={footer_logo}
          alt="Nice Gadgets Logo"
        />
      </a>

      <ul className="footer__links">
        <li>Github</li>
        <li>Contacts</li>
        <li>Rights</li>
      </ul>

      <a href="#" className="footer__back--to--top">
        <span>Back to top</span>
        <div className="footer__back--to--top__layout">
          <img
            className="footer__back--to--top__layout--slider"
            src={slider_black}
            alt="Slider to the top"
          />
        </div>
      </a>
    </footer>
  );
};

export default Footer;
