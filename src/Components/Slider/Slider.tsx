import React from 'react';
import black_slider from '../../assets/icons/slider_black.svg';
import gray_slider from '../../assets/icons/slider_gray.svg';

const Slider: React.FC = () => {
  return (
    <ul className="home__new__models--slider">
      <li className="home__new__models--slider--layout">
        <img src={gray_slider} alt="Slider to the left" />
      </li>
      <li className="home__new__models--slider--layout">
        <img src={black_slider} alt="Slider to the right" />
      </li>
    </ul>
  );
};

export default Slider;
