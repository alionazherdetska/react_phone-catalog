import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import gray_slider_left from '../../assets/icons/slider_gray_left.svg';
import gray_slider_right from '../../assets/icons/slider_gray_right.svg';
import home_icon from '../../assets/icons/home.svg';
import { FavoritesCartContext } from '../../services/favoritesCartContext';
import { ProductType } from '../../types/types';
import { getCompleteListOfProducts } from '../../services/fetchClients';
import { ProductCard } from '../ProductCard';
import { Link } from 'react-router-dom';

const Favorites: React.FC = () => {
  const { favorites } = useContext(FavoritesCartContext);
  const [listOfFavorites, setListOfFavorites] = useState<ProductType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCompleteListOfProducts('products').then(
      (receivedListOfProducts: ProductType[]) => {
        setListOfFavorites(
          receivedListOfProducts.filter(product =>
            favorites.includes(product.itemId.toString()),
          ),
        );
      },
    );
  }, [favorites]);

  return (
    <div className="favorites" id="#favorites">
      <section className="favorites__top">
        <div className="favorites__top--search-params">
          <Link to="/" className="favorites__top--search-params__icons">
            <img
              src={home_icon}
              className="favorites__top--search-params__icons-home"
              alt="Home"
            />
          </Link>
          <img
            src={gray_slider_left}
            className="favorites__top--search-params__icons-slider"
            alt="Slider"
          />

          <h4 className="favorites__top--search-params__name">Favorites</h4>
        </div>
        <div
          className="item-card__top--search-params__back"
          onClick={() => navigate(-1)}
        >
          <img
            src={gray_slider_right}
            className="phones__top--search-params__icons-slider"
            alt="Slider"
          />
          <h4
            onClick={() => navigate(-1)}
            className="item-card__top--search-params__back__name"
          >
            Back
          </h4>
        </div>
        <h1>Favourites</h1>
        <p>5 items</p>
      </section>

      <div className="favorites__product-card">
        {listOfFavorites.map((favoriteItem, index) => (
          <li key={index}>
            <ProductCard
              productImg={favoriteItem.image}
              productName={favoriteItem.name}
              itemId={favoriteItem.itemId}
              price={favoriteItem.fullPrice}
              discountPrice={favoriteItem.price}
              screen={favoriteItem.screen}
              capacity={favoriteItem.capacity}
              ram={favoriteItem.ram}
            />
          </li>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
