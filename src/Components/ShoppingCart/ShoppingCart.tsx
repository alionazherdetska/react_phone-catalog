import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

const ShoppingCart: React.FC = () => {
  return (
    <div className="shopping-cart">
      <Header />
      <section className="shopping-cart__top">
        <div className="shopping-cart__top--search-params">
          <div className="favorites__top--search-params__icons">
            <img
              src="/icons/slider_black.svg"
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
            <img src="/icons/close.svg" alt="Closing icon" />
          </div>
          <div className="shopping-cart__element__top__img">
            <img
              src="/img/phones/apple-iphone-14-pro/gold/00.webp"
              alt="Iphone 14 Pro"
            />
          </div>
          <div className="shopping-cart__element__top__name">
            Apple iPhone 14 Pro 128GB Silver (MQ023)
          </div>
        </div>
        <div className="shopping-cart__element__bottom">
          <div className="shopping-cart__element__bottom__counter">
            <div className="shopping-cart__element__bottom__counter__img">
              <img src="/icons/minus.svg" alt="Minus" />
            </div>
            <p>1</p>
            <div className="shopping-cart__element__bottom__counter__img">
              <img src="/icons/plus.svg" alt="Plus" />
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
