import React, { useContext, useState } from 'react';
import heart_icon from '../../assets/icons/heart.svg';
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
  const [isFavorited, setIsFavorited] = useState(favorites.includes(itemId));
  const [isAddedToCart, setIsAddedToCart] = useState(
    cartItems.includes(itemId),
  );

  const toggleFavorite = () => {
    if (isFavorited) {
      removeFromFavorites(itemId);
    } else {
      addToFavorites(itemId);
    }

    setIsFavorited(!isFavorited);
  };

  const toggleAdding = () => {
    if (isAddedToCart) {
      removeFromCart(itemId);
    } else {
      addToCart(itemId);
    }

    setIsAddedToCart(!isAddedToCart);
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
        <button onClick={toggleAdding} className="product__card--actions--add">
          Add to cart
        </button>

        <button
          onClick={toggleFavorite}
          className="product__card--actions--like"
        >
          <img src={heart_icon} />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
