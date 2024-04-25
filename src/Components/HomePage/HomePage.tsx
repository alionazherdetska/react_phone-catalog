import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Footer } from '../Footer';
import { Slider } from '../Slider';
import { Header } from '../Header';
import home_banner from './../../assets/icons/homePage_banner.jpg';
import home_slider from './../../assets/icons/dots_home-page_left.svg';
import phone_category from './../../assets/icons/category-phones.png';
import tablet_category from './../../assets/icons/category-tablets.png';
import accessory_category from './../../assets/icons/category-accessories.png';

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <Header />

      <div className="home__bottom">
        <h1 className="home__bottom--title">Welcome to Nice Gadgets store!</h1>
        <a href="#">
          <img
            src={home_banner}
            className="home__bottom--banner"
            alt="Home Page Banner"
          />
        </a>

        <img className="home__bottom--slider" src={home_slider} alt="Slider" />
      </div>

      <>
        <section className="home__new__models">
          <h2 className="home__new__models--title">Brand new models</h2>
          <Slider />
        </section>
        <section className="home__product-card">
          <ProductCard />
        </section>

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
        <section className="home__product-card">
          <ProductCard />
        </section>
      </>

      <Footer />
    </div>
  );
};

export default HomePage;
