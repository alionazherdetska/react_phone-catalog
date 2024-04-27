import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Slider } from '../Slider';

import black_slider from '../../assets/icons/slider_black.svg';
import phone_category from './../../assets/icons/category-phones.png';
import home_slider from './../../assets/icons/dots_home-page_left.svg';
import tablet_category from './../../assets/icons/category-tablets.png';
import home_banner_phone from './../../assets/icons/homePage_banner.jpg';
import banner_desktop from './../../assets/icons/banner_desktop.svg';
import banner_tablet from './../../assets/icons/banner_tablet.svg';
import accessory_category from './../../assets/icons/category-accessories.png';

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <div className="home__bottom">
        <h1 className="home__bottom--title">Welcome to Nice Gadgets store!</h1>
        <div className="home__bottom__slider">
          <li className="home__bottom__slider-left">
            <img src={black_slider} alt="Slider to the left" />
          </li>

          <a className="home_bottom--img" href="#">
            <img
              src={home_banner_phone}
              className="home__bottom--img--banner"
              alt="Home Page Banner"
            />
            <img
              src={banner_tablet}
              className="home__bottom--img--tablet"
              alt="Home Page Banner"
            />
            <img
              src={banner_desktop}
              className="home__bottom--img--desktop"
              alt="Home Page Banner"
            />
          </a>
          <li className="home__bottom__slider-right">
            <img src={black_slider} alt="Slider to the right" />
          </li>
        </div>
        <img className="home__bottom--slider" src={home_slider} alt="Slider" />
      </div>

      <>
        <section className="home__new__models">
          <h2 className="home__new__models--title">Brand new models</h2>
          <Slider />
        </section>
        <div className="home__product-card__scroll">
          <ul className="home__product-card__scroll__content">
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
          </ul>
        </div>

        <section className="home__categories">
          <h2 className="home__categories--title">Shop by category</h2>

          <ul className="home__categories--list">
            <li className="home__categories--list--phones">
              <div className="home__categories--list--phones--wrapper">
                <img
                  src={phone_category}
                  alt="Category Phones"
                  className="home__categories--list--phones--img"
                />
              </div>
              <h3>Mobile phones</h3>
              <p>95 models</p>
            </li>

            <li className="home__categories--list--tablets">
              <div className="home__categories--list--tablets--wrapper">
                <img
                  src={tablet_category}
                  className="home__categories--list--tablets--img"
                  alt="Category Tablets"
                />
              </div>
              <h3>Tablets</h3>
              <p>24 models</p>
            </li>

            <li className="home__categories--list--accessories">
              <div className="home__categories--list--accessories--wrapper">
                <img
                  src={accessory_category}
                  className="home__categories--list--accessories--img"
                  alt="Category Accessories"
                />
              </div>
              <h3>Accessories</h3>
              <p>100 models</p>
            </li>
          </ul>
        </section>

        <section className="home__hot--prices">
          <h2 className="home__hot--prices--title">Hot prices</h2>
          <Slider />
        </section>
        <div className="home__product-card__scroll">
          <ul className="home__product-card__scroll__content">
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
          </ul>
        </div>
      </>
    </div>
  );
};

export default HomePage;
