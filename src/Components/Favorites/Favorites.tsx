import React from 'react';
// import { ProductCard } from '../ProductCard';
import gray_slider_left from '../../assets/icons/slider_gray_left.svg';
import home_icon from '../../assets/icons/home.svg';

const Favorites: React.FC = () => {
  return (
    <div className="favorites" id="#favorites">
      <section className="favorites__top">
        <div className="favorites__top--search-params">
          <div className="favorites__top--search-params__icons">
            <img
              src={home_icon}
              className="favorites__top--search-params__icons-home"
              alt="Home"
            />
            <img
              src={gray_slider_left}
              className="favorites__top--search-params__icons-slider"
              alt="Slider"
            />
          </div>

          <h4 className="favorites__top--search-params__name">Favorites</h4>
        </div>
        <h1>Favourites</h1>
        <p>5 items</p>
      </section>

      {/* <div className="favorites__product-card">
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
      </div> */}
    </div>
  );
};

export default Favorites;
