import React from 'react';
import heart_icon from '../../assets/icons/heart.svg';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  productName: string;
  price: number;
  discountPrice: number;
  screen: string;
  capacity: string;
  ram: string;
  itemId: string;
  productImg: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  // price,
  itemId,
  productImg,
  discountPrice,
  screen,
  capacity,
  ram,
}) => {
  return (
    <Link to={`/item-card/${itemId}`} className="product__card">
      <section className="product__card--top">
        <img className="product__card--top--img" src={productImg} />
        <h3 className="product__card--top--name">{productName}</h3>
        <span className="product__card--top--price">${discountPrice}</span>
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
    </Link>
  );
};

export default ProductCard;
