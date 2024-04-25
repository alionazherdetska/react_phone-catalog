import React from 'react';
import heart_icon from '../../assets/icons/heart.svg';
import product_card_img from '../../assets/layout/iphone_14.png';

const ProductCard: React.FC = () => {
  return (
    <article className="product__card">
      <section className="product__card--top">
        <img className="product__card--top--img" src={product_card_img} />
        <h3 className="product__card--top--name">
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </h3>
        <span className="product__card--top--price">$999</span>
      </section>

      <section className="product__card--bottom">
        <div className="product__card--bottom--properties">
          <div className="product__card--bottom--properties--specific">
            <p>Screen</p>
            <span>6.1” OLED</span>
          </div>

          <div className="product__card--bottom--properties--specific">
            <p>Capacity</p>
            <span>128 GB</span>
          </div>

          <div className="product__card--bottom--properties--specific">
            <p>RAM</p>
            <span>6 GB</span>
          </div>
        </div>

        <div className="product__card--bottom--actions">
          <button className="product__card--bottom--actions--add">
            Add to cart
          </button>

          <button className="product__card--bottom--actions--like">
            <img src={heart_icon} />
          </button>
        </div>
      </section>
    </article>
  );
};

export default ProductCard;
