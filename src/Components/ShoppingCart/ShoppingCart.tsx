import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

import minus from '../../assets/icons/minus.svg';
import plus from '../../assets/icons/plus.svg';
import close from '../../assets/icons/close.svg';
import iphone_14Pro from '../../assets/layout/iphone_14.png';
import black_slider from '../../assets/icons/slider_black.svg';

const ShoppingCart: React.FC = () => {
  return (
    <div className="shopping-cart">
      <Header />

      <section className="shopping-cart__top">
        <div className="shopping-cart__top--search-params">
          <div className="favorites__top--search-params__icons">
            <img
              src={black_slider}
              className="shopping-cart__top--search-params__icons-slider"
              alt="Slider"
            />
          </div>

          <h4 className="shopping-cart__top--search-params__name">Back</h4>
        </div>
        <h1>Cart</h1>
      </section>

      <article className="shopping-cart__element">
        <div className="shopping-cart__element__top">
          <div className="shopping-cart__element__top__close">
            <img src={close} alt="Closing icon" />
          </div>

          <div className="shopping-cart__element__top__img">
            <img src={iphone_14Pro} alt="Iphone 14 Pro" />
          </div>

          <div className="shopping-cart__element__top__name">
            Apple iPhone 14 Pro 128GB Silver (MQ023)
          </div>
        </div>

        <div className="shopping-cart__element__bottom">
          <div className="shopping-cart__element__bottom__counter">
            <div className="shopping-cart__element__bottom__counter__img">
              <img src={minus} alt="Minus" />
            </div>

            <p>1</p>
            <div className="shopping-cart__element__bottom__counter__img">
              <img src={plus} alt="Plus" />
            </div>
          </div>
          <div className="shopping-cart__element__bottom__price">$999</div>
        </div>
      </article>

      <article className="shopping-cart__total">
        <div className="shopping-cart__total__top">
          <h3 className="shopping-cart__total__top--price">$2657</h3>
          <p>Total for 3 items</p>
        </div>

        <div className="shopping-cart__total__bottom">
          <button>Checkout</button>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ShoppingCart;
