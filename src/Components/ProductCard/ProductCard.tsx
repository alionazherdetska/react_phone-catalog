import React from 'react';
import heart_icon from '../../assets/icons/heart.svg';

interface ProductCardProps {
  productName: string;
  price: number;
  discountPrice: number;
  screen: string;
  capacity: string;
  ram: string;
  productImg: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  price,
  productImg,
  // discountPrice,
  screen,
  capacity,
  ram,
}) => {
  return (
    <article className="product__card">
      <section className="product__card--top">
        <img className="product__card--top--img" src={productImg} />
        <h3 className="product__card--top--name">{productName}</h3>
        <span className="product__card--top--price">${price}</span>
      </section>

      <section className="product__card--bottom">
        <div className="product__card--bottom--properties">
          <div className="product__card--bottom--properties--specific">
            <p>Screen</p>
            <span>{screen}</span>
          </div>

          <div className="product__card--bottom--properties--specific">
            <p>Capacity</p>
            <span>{capacity}</span>
          </div>

          <div className="product__card--bottom--properties--specific">
            <p>RAM</p>
            <span>{ram}</span>
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
