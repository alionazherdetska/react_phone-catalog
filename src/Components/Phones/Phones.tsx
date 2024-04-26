import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { ProductCard } from '../ProductCard';
import home_icon from '../../assets/icons/home.svg';
import gray_slider from '../../assets/icons/slider_gray.svg';
import black_slider from '../../assets/icons/slider_black.svg';

const Phones: React.FC = () => {
  return (
    <div className="phones">
      <Header />

      <section className="phones__top">
        <div className="phones__top--search-params">
          <div className="phones__top--search-params__icons">
            <img
              src={home_icon}
              className="phones__top--search-params__icons-home"
              alt="Home"
            />

            <img
              src={gray_slider}
              className="phones__top--search-params__icons-slider"
              alt="Slider"
            />
          </div>

          <h4 className="phones__top--search-params__name">Phones</h4>
        </div>
        <h1>Mobile phones</h1>
        <p>95 models</p>
      </section>

      <section className="phones__main">
        <div className="phones__main__sorting-by">
          <label htmlFor="sortingBy">Sort by</label>
          <select id="sortingBy">
            <option className="phones__main__sorting-by__option">Newest</option>
          </select>
        </div>

        <div className="phones__main__amount">
          <label htmlFor="perPage">Items on page</label>
          <select id="perPage">
            <option>16</option>
          </select>
        </div>
      </section>

      <ul className="phones__list">
        <div className="phones__list__product-card">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </ul>

      <ul className="phones--slider">
        <li className="phones--slider--layout">
          <img src={gray_slider} alt="Slider to the left" />
        </li>
        <ul className="phones--slider--pages">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>

        <li className="phones--slider--layout">
          <img src={black_slider} alt="Slider to the right" />
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default Phones;
