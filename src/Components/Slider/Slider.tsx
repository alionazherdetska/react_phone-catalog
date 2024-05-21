import classNames from 'classnames';
import React from 'react';

interface Props {
  handleLeftSlide: () => void;
  handleRightSlide: () => void;
  disableLeft: boolean;
  disableRight: boolean;
}

const Slider: React.FC<Props> = ({
  handleLeftSlide,
  handleRightSlide,
  disableLeft,
  disableRight,
}) => {
  return (
    <ul className="slider">
      <button
        className={classNames('slider--layout slider--layout__left', {
          'slider--layout__left__disabled': disableLeft,
        })}
        onClick={handleLeftSlide}
        disabled={disableLeft}
      ></button>
      <button
        className={classNames('slider--layout slider--layout__right', {
          'slider--layout__right__disabled': disableRight,
        })}
        onClick={handleRightSlide}
        disabled={disableRight}
      ></button>
    </ul>
  );
};

export default Slider;
