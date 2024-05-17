import React, { useContext } from 'react';
import classNames from 'classnames';

import heart_icon from '../../assets/icons/heart.svg';
import heart_blue from '../../assets/icons/heart_blue.svg';
import { Link } from 'react-router-dom';
import { FavoritesCartContext } from '../../services/favoritesCartContext';

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
  const {
    favorites,
    addToFavorites,
    removeFromFavorites,
    cartItems,
    addToCart,
    removeFromCart,
  } = useContext(FavoritesCartContext);
  const isFavorited = favorites.includes(itemId);
  const isAddedToCart = cartItems.includes(itemId);

  const toggleFavorite = () => {
    if (isFavorited) {
      removeFromFavorites(itemId);
    } else {
      addToFavorites(itemId);
    }
  };

  const toggleAdding = () => {
    if (isAddedToCart) {
      removeFromCart(itemId);
    } else {
      addToCart(itemId);
    }
  };

  return (
    <article className="product__card">
      <Link className="product__card-wrapper" to={`/item-card/${itemId}`}>
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
        </section>
      </Link>

      <div className="product__card--actions">
        <button
          onClick={toggleAdding}
          className={classNames('product__card--actions--add', {
            'product__card--actions--add--active': isAddedToCart,
          })}
        >
          {isAddedToCart ? 'Selected' : 'Add to cart'}
        </button>

        <button
          onClick={toggleFavorite}
          className={classNames('product__card--actions--like', {
            'product__card--actions--like--active': isFavorited,
          })}
        >
          <img src={isFavorited ? heart_blue : heart_icon} />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
