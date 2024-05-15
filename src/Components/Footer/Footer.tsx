import React from 'react';
import footer_logo from '../../assets/icons/nice_gadgets_logo.png';

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
        <li className="footer__links__li">Github</li>
        <li className="footer__links__li">Contacts</li>
        <li className="footer__links__li">Rights</li>
      </ul>

      <a href="#" className="footer__back--to--top">
        <span>Back to top</span>
        <div className="footer__back--to--top__layout"></div>
      </a>
    </footer>
  );
};

export default Footer;
