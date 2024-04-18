import React from 'react';

const Slider: React.FC = () => {
  return (
    <ul className="home__new__models--slider">
      <li className="home__new__models--slider--layout">
        <img src="/icons/slider_gray.svg" alt="Slider to the left" />
      </li>
      <li className="home__new__models--slider--layout">
        <img src="/icons/slider_black.svg" alt="Slider to the right" />
      </li>
    </ul>
  );
};

export default Slider;
