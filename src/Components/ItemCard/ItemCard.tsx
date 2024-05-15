import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import home_icon from '../../assets/icons/home.svg';
import heart_icon from '../../assets/icons/heart.svg';
import gray_slider_right from '../../assets/icons/slider_gray_right.svg';
import gray_slider_left from '../../assets/icons/slider_gray_left.svg';
import black_slider_left from '../../assets/icons/slider_black_left.svg';

import { useParams } from 'react-router-dom';
import { Product, ProductType } from '../../types/types';
import { getCertainProduct } from '../../services/fetchClients';
import { getCompleteListOfProducts } from '../../services/fetchClients';
import { getColorImage } from '../../services/colorImports';
import { ProductCard } from '../ProductCard';
import { Slider } from '../Slider';

const ItemCard: React.FC = () => {
  const [item, setItem] = useState<Product | null>(null);
  const [bannerPhoto, setBannerPhoto] = useState(item?.images[0]);
  const [singleProductId, setSingleProductId] = useState<string>('');
  const [activeCapacity, setActiveCapacity] = useState<string | null>(null);
  const [listOfProducts, setListOfProducts] = useState<ProductType[]>([]);
  const [sliceStart, setSliceStart] = useState<number>(0);
  const [sliceEnd, setSliceEnd] = useState<number>(4);
  const { itemId } = useParams<{ itemId: string }>();

  const generateRandomId = () => {
    const randomNumber = Math.floor(Math.random() * 1000000);

    return randomNumber.toString();
  };

  useEffect(() => {
    const randomId = generateRandomId();

    setSingleProductId(randomId);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const phonesProducts: Product[] = await getCertainProduct('phones');
        const phonesItem = phonesProducts.find(
          product => product.id === itemId,
        );

        if (phonesItem) {
          setItem(phonesItem);
          setBannerPhoto(phonesItem.images[0]);

          return;
        }

        const accessoriesProducts: Product[] =
          await getCertainProduct('accessories');
        const accessoriesItem = accessoriesProducts.find(
          product => product.id === itemId,
        );

        if (accessoriesItem) {
          setItem(accessoriesItem);
          setBannerPhoto(accessoriesItem.images[0]);

          return;
        }

        const tabletsProducts: Product[] = await getCertainProduct('tablets');
        const tabletsItem = tabletsProducts.find(
          product => product.id === itemId,
        );

        if (tabletsItem) {
          setItem(tabletsItem);
          setBannerPhoto(tabletsItem.images[0]);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [itemId]);

  useEffect(() => {
    getCompleteListOfProducts('products').then(
      (receivedListOfProducts: ProductType[]) => {
        setListOfProducts(receivedListOfProducts);
      },
    );
  }, []);

  const handleImageChange = (newBannerPhoto: string) => {
    setBannerPhoto(newBannerPhoto);
  };

  const handleLeftSliceChange = () => {
    setSliceStart(prevStart => prevStart - 1);
    setSliceEnd(prevEnd => prevEnd - 1);
  };

  const handleRightSliceChange = () => {
    setSliceStart(prevStart => prevStart + 1);
    setSliceEnd(prevEnd => prevEnd + 1);
  };

  return (
    <div className="item-card">
      <section className="item-card__top">
        <div className="item-card__top--search-params">
          <div className="item-card__top--search-params__icons">
            <img
              src={home_icon}
              className="item-card__top--search-params__icons-home"
              alt="Home"
            />
            <img
              src={gray_slider_left}
              className="item-card__top--search-params__icons-slider"
              alt="Slider"
            />
          </div>

          <h4 className="item-card__top--search-params__name">
            {item?.category}
          </h4>
          <img
            src={gray_slider_right}
            className="item-card__top--search-params__icons-slider"
            alt="Slider"
          />
          <h4 className="item-card__top--search-params__name--exact">
            {item?.name}
          </h4>
        </div>

        <div className="item-card__top--search-params__back">
          <img
            src={black_slider_left}
            className="phones__top--search-params__icons-slider"
            alt="Slider"
          />
          <h4 className="item-card__top--search-params__back__name">Back</h4>
        </div>
        <h1>{item?.name}</h1>
      </section>

      <main className="item-card__main">
        <div className="item-card__main__imgs">
          <div className="item-card__main__imgs__front-img">
            <img src={bannerPhoto} alt={`${item?.category} image`} />
          </div>

          <div className="item-card__main__imgs__bottom-imgs">
            {item?.images.map((image, index) => (
              <img
                key={index}
                src={image}
                className={classNames({
                  'is-active': bannerPhoto === image,
                })}
                onClick={() => handleImageChange(image)}
                alt={`Image ${index}`}
              />
            ))}
          </div>
        </div>

        <div className="item-card__main__info">
          <div className="item-card__main__info__colors-label">
            <p>Available colors</p>
            <p>ID: {singleProductId}</p>
          </div>
          <div className="item-card__main__info__actual-colors">
            {item?.colorsAvailable.map((color, index) => (
              <img
                key={index}
                src={getColorImage(color)}
                alt={`${color} color`}
              />
            ))}
          </div>

          <div className="item-card__main__info__capacity">
            <p>Select capacity</p>
          </div>
          <div className="item-card__main__info__capacity-options">
            {item?.capacityAvailable.map((capacity, index) => (
              <button
                key={index}
                className={classNames({
                  'item-card__main__info__capacity-options-active':
                    capacity === activeCapacity,
                  'item-card__main__info__capacity-options-passive':
                    capacity !== activeCapacity,
                })}
                onClick={() => setActiveCapacity(capacity)}
              >
                {capacity}
              </button>
            ))}
          </div>

          <div className="item-card__main__info__price">
            <span className="item-card__main__info__price--discount">
              ${item?.priceDiscount}
            </span>
            <span className="item-card__main__info__price--original">
              ${item?.priceRegular}
            </span>
          </div>

          <div className="item-card__main__info--bottom">
            <button className="item-card__main__info--bottom--add">
              Add to cart
            </button>
            <button className="item-card__main__info--bottom--like">
              <img src={heart_icon} />
            </button>
          </div>

          <div className="item-card__main__info--properties">
            <div className="item-card__main__info--properties--specific">
              <p>Screen</p>
              <span>{item?.screen}</span>
            </div>

            <div className="item-card__main__info--properties--specific">
              <p>Resolution</p>
              <span>{item?.resolution}</span>
            </div>

            <div className="item-card__main__info--properties--specific">
              <p>Processor</p>
              <span>{item?.processor}</span>
            </div>

            <div className="item-card__main__info--properties--specific">
              <p>RAM</p>
              <span>{item?.ram}</span>
            </div>
          </div>
        </div>
      </main>

      <div className="item-card__about">
        <div className="item-card__about__general">
          <h2>About</h2>
          <h3>{item?.description[0].title}</h3>
          <p>{item?.description[0].text}</p>
          <h3>{item?.description[1].title}</h3>
          <p>{item?.description[1].text}</p>
          <h3>{item?.description[2].title}</h3>
          <p>{item?.description[2].text}</p>
        </div>

        <div className="item-card__about__tec-specs">
          <h2>Tech specs</h2>
          <div className="item-card__about--properties">
            <div className="item-card__about--properties--specific">
              <p>Screen</p>
              <span>{item?.screen}</span>
            </div>

            <div className="item-card__about--properties--specific">
              <p>Resolution</p>
              <span>{item?.resolution}</span>
            </div>

            <div className="item-card__about--properties--specific">
              <p>Processor</p>
              <span>{item?.processor}</span>
            </div>

            <div className="item-card__about--properties--specific">
              <p>RAM</p>
              <span>{item?.ram}</span>
            </div>

            <div className="item-card__about--properties--specific">
              <p>Built in memory</p>
              <span>{item?.capacity}</span>
            </div>

            <div className="item-card__about--properties--specific">
              <p>Camera</p>
              <span>{item?.camera}</span>
            </div>

            <div className="item-card__about--properties--specific">
              <p>Zoom</p>
              <span>{item?.zoom}</span>
            </div>

            <div className="item-card__about--properties--specific">
              <p>Cell</p>
              <div className="item-card__about--properties--specific__cell">
                {item?.cell.map((cell, index) => (
                  <span key={index}>
                    {index !== 0 && ', '}
                    {cell}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="item-card__about__suggestions">
          <h2>You may also like</h2>
          <Slider
            handleLeftSlide={handleLeftSliceChange}
            handleRightSlide={handleRightSliceChange}
          />
        </div>
      </div>

      <div className="item-card__scroll">
        <ul className="item-card__scroll__content">
          {listOfProducts
            .sort((product1, product2) => product1.year - product2.year)
            .slice(sliceStart, sliceEnd)
            .map((product, index) => (
              <ProductCard
                key={index}
                productImg={product.image}
                productName={product.name}
                itemId={product.itemId}
                price={product.fullPrice}
                discountPrice={product.price}
                screen={product.screen}
                capacity={product.capacity}
                ram={product.ram}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemCard;
