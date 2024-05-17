import React from 'react';
interface Props {
  handleLeftSlide: () => void;
  handleRightSlide: () => void;
}

const Slider: React.FC<Props> = ({ handleLeftSlide, handleRightSlide }) => {
  return (
    <ul className="slider">
      <button
        className="slider--layout slider--layout__left"
        onClick={handleLeftSlide}
      ></button>
      <button
        className="slider--layout slider--layout__right"
        onClick={handleRightSlide}
      ></button>
    </ul>
  );
};

export default Slider;
