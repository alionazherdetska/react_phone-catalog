import React from 'react';
import gray_slider_right from '../../assets/icons/slider_gray_right.svg';
import gray_slider_left from '../../assets/icons/slider_gray_left.svg';

const Slider: React.FC = () => {
  return (
    <ul className="home__new__models--slider">
      <li className="home__new__models--slider--layout">
        <img src={gray_slider_left} alt="Slider to the left" />
      </li>
      <li className="home__new__models--slider--layout">
        <img src={gray_slider_right} alt="Slider to the right" />
      </li>
    </ul>
  );
};

export default Slider;
