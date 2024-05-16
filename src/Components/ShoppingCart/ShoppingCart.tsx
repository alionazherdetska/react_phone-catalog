import React, { useContext, useEffect, useState } from 'react';

import minus from '../../assets/icons/minus.svg';
import plus from '../../assets/icons/plus.svg';
import close from '../../assets/icons/close.svg';
import gray_slider_right from '../../assets/icons/slider_gray_right.svg';
import { getCompleteListOfProducts } from '../../services/fetchClients';
import { ProductType } from '../../types/types';
import { FavoritesCartContext } from '../../services/favoritesCartContext';

const ShoppingCart: React.FC = () => {
  const { cartItems } = useContext(FavoritesCartContext);
  const [listOfCartItems, setListOfCartItems] = useState<ProductType[]>([]);

  useEffect(() => {
    getCompleteListOfProducts('products').then(
      (receivedListOfProducts: ProductType[]) => {
        setListOfCartItems(
          receivedListOfProducts.filter(product =>
            cartItems.includes(product.itemId.toString()),
          ),
        );
      },
    );
  }, [cartItems]);

  return (
    <div className="shopping-cart" id="#cart">
      <section className="shopping-cart__top">
        <div className="shopping-cart__top--search-params">
          <div className="favorites__top--search-params__icons">
            <img
              src={gray_slider_right}
              className="shopping-cart__top--search-params__icons-slider"
              alt="Slider"
            />
          </div>

          <h4 className="shopping-cart__top--search-params__name">Back</h4>
        </div>
        <h1>Cart</h1>
      </section>

      <ul className="shopping-cart__left">
        {listOfCartItems.map(cartItem => (
          <article className="shopping-cart__left__element" key={cartItem.id}>
            <div className="shopping-cart__left__element__top">
              <div className="shopping-cart__left__element__top__close">
                <img src={close} alt="Closing icon" />
              </div>
              <div className="shopping-cart__left__element__top__img">
                <img src={cartItem.image} alt={cartItem.name} />
              </div>
              <div className="shopping-cart__left__element__top__name">
                {cartItem.name}
              </div>
            </div>
            <div className="shopping-cart__left__bottom">
              <div className="shopping-cart__left__bottom__counter">
                <div className="shopping-cart__left__bottom__counter__img">
                  <img src={minus} alt="Minus" />
                </div>
                <p>1</p>
                <div className="shopping-cart__left__bottom__counter__img">
                  <img src={plus} alt="Plus" />
                </div>
              </div>
              <div className="shopping-cart__left__bottom__price">
                ${cartItem.price}
              </div>
            </div>
          </article>
        ))}
      </ul>

      <article className="shopping-cart__total">
        <div className="shopping-cart__total__top">
          <h3 className="shopping-cart__total__top--price">$2657</h3>
          <p>Total for 3 items</p>
        </div>

        <div className="shopping-cart__total__bottom">
          <button>Checkout</button>
        </div>
      </article>
    </div>
  );
};

export default ShoppingCart;
