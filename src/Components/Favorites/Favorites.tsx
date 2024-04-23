import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { ProductCard } from '../ProductCard';

const Favorites: React.FC = () => {
  return (
    <div className="favorites">
      <Header />

      <section className="favorites__top">
        <div className="favorites__top--search-params">
          <div className="favorites__top--search-params__icons">
            <img
              src="/icons/home.svg"
              className="favorites__top--search-params__icons-home"
              alt="Home"
            />
            <img
              src="/icons/slider_gray.svg"
              className="favorites__top--search-params__icons-slider"
              alt="Slider"
            />
          </div>

          <h4 className="favorites__top--search-params__name">Phones</h4>
        </div>
        <h1>Favourites</h1>
        <p>5 items</p>
      </section>

      <div className="favorites__product-card">
        <ProductCard />
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
