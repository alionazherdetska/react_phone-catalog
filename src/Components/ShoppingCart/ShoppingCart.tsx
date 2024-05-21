import React, { useContext, useEffect, useState } from 'react';
import minus from '../../assets/icons/minus.svg';
import plus from '../../assets/icons/plus.svg';
import close from '../../assets/icons/close.svg';
import gray_slider_right from '../../assets/icons/slider_gray_right.svg';
import { getCompleteListOfProducts } from '../../services/fetchClients';
import { ProductType } from '../../types/types';
import { FavoritesCartContext } from '../../services/favoritesCartContext';
import ModalWindow from '../ModalWindow/ModalWindow';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const ShoppingCart: React.FC = () => {
  const { cartItems, removeFromCart } = useContext(FavoritesCartContext);
  const [listOfCartItems, setListOfCartItems] = useState<ProductType[]>([]);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    getCompleteListOfProducts('products').then(
      (receivedListOfProducts: ProductType[]) => {
        const filteredProducts = receivedListOfProducts.filter(product =>
          cartItems.includes(product.itemId.toString()),
        );

        setListOfCartItems(filteredProducts);
        const initialQuantities = filteredProducts.reduce(
          (acc, product) => {
            // eslint-disable-next-line no-param-reassign
            acc[product.itemId] = 1;

            return acc;
          },
          {} as { [key: string]: number },
        );

        setQuantities(initialQuantities);
      },
    );
  }, [cartItems]);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleIncrement = (itemId: string) => {
    setQuantities(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const handleDecrement = (itemId: string) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 1),
    }));
  };

  const totalPrice = listOfCartItems.reduce((sum, item) => {
    return sum + item.price * quantities[item.itemId];
  }, 0);

  return (
    <div className="shopping-cart" id="#cart">
      {modalIsOpen && <ModalWindow closeModal={closeModal} />}

      <section className="shopping-cart__top">
        <div className="shopping-cart__top--search-params">
          <div
            className="favorites__top--search-params__icons"
            onClick={() => navigate(-1)}
          >
            <img
              src={gray_slider_right}
              className="shopping-cart__top--search-params__icons-slider"
              alt="Slider"
            />
          </div>
          <h4
            className="shopping-cart__top--search-params__name"
            onClick={() => navigate(-1)}
          >
            Back
          </h4>
        </div>
        <h1>Cart</h1>
      </section>

      <ul className="shopping-cart__left">
        {listOfCartItems.map(cartItem => (
          <article
            className={classNames('shopping-cart__left__element', {
              'shopping-cart__left__element__active': modalIsOpen,
            })}
            key={cartItem.id}
          >
            <div className="shopping-cart__left__element__top">
              <button
                onClick={() => removeFromCart(cartItem.itemId)}
                className="shopping-cart__left__element__top__close"
              >
                <img src={close} alt="Closing icon" />
              </button>
              <div className="shopping-cart__left__element__top__img">
                <img src={cartItem.image} alt={cartItem.name} />
              </div>
              <div className="shopping-cart__left__element__top__name">
                {cartItem.name}
              </div>
            </div>
            <div className="shopping-cart__left__bottom">
              <div className="shopping-cart__left__bottom__counter">
                <button
                  onClick={() => handleDecrement(cartItem.itemId)}
                  className="shopping-cart__left__bottom__counter__img"
                >
                  <img src={minus} alt="Minus" />
                </button>
                <p>{quantities[cartItem.itemId]}</p>
                <button
                  onClick={() => handleIncrement(cartItem.itemId)}
                  className="shopping-cart__left__bottom__counter__img"
                >
                  <img src={plus} alt="Plus" />
                </button>
              </div>
              <div className="shopping-cart__left__bottom__price">
                ${cartItem.price * quantities[cartItem.itemId]}
              </div>
            </div>
          </article>
        ))}
      </ul>

      {listOfCartItems.length > 0 && (
        <article
          className={classNames('shopping-cart__total', {
            'shopping-cart__total__active': modalIsOpen,
          })}
        >
          <div className="shopping-cart__total__top">
            <h3 className="shopping-cart__total__top--price">${totalPrice}</h3>
            <p>Total for {listOfCartItems.length} items</p>
          </div>

          <div className="shopping-cart__total__bottom">
            <button onClick={() => setModalIsOpen(!modalIsOpen)}>
              Checkout
            </button>
          </div>
        </article>
      )}
    </div>
  );
};

export default ShoppingCart;
