import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <a href="#">
        <img
          className="footer__img"
          src="/icons/nice_gadgets_logo.png"
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
            src="/icons/slider_black.svg"
            alt="Slider to the top"
          />
        </div>
      </a>
    </footer>
  );
};

export default Footer;
