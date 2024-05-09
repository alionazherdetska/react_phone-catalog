import React from 'react';
import footer_logo from '../../assets/icons/nice_gadgets_logo.png';
import gray_slider_right from '../../assets/icons/slider_gray_left.svg';

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
            src={gray_slider_right}
            alt="Slider to the top"
          />
        </div>
      </a>
    </footer>
  );
};

export default Footer;
