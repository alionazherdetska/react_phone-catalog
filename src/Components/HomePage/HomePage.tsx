import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Slider } from '../Slider';

import phone_category from './../../assets/icons/category-phones.png';
import tablet_category from './../../assets/icons/category-tablets.png';
import phone_banner1 from './../../assets/icons/phone_banner1.jpg';
import phone_banner2 from './../../assets/icons/phone_banner2.png';
import phone_banner3 from './../../assets/icons/phone_banner3.png';
import banner_tablet1 from './../../assets/icons/banner_tablet1.png';
import banner_tablet2 from './../../assets/icons/banner_tablet2.png';
import banner_tablet3 from './../../assets/icons/banner_tablet3.png';
import accessory_category from './../../assets/icons/category-accessories.png';
import { ProductType } from '../../types/types';
import { getCompleteListOfProducts } from '../../services/fetchClients';
import { ProductCard } from '../ProductCard';

const HomePage: React.FC = () => {
  const banners = [phone_banner1, phone_banner2, phone_banner3];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [homeBanner, setHomeBanner] = useState(phone_banner1);
  const [sliceStart, setSliceStart] = useState<number>(0);
  const [sliceEnd, setSliceEnd] = useState<number>(4);
  const [listOfProducts, setListOfProducts] = useState<ProductType[]>([]);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const changeImage = (photo: File) => {
    setHomeBanner(photo);
  };

  const moveSlide = (direction: 'left' | 'right') => {
    setCurrentIndex(prevIndex => {
      let newIndex = prevIndex;
      const totalAmountOfSlides = 3;

      switch (direction) {
        case 'left':
          newIndex = prevIndex === 0 ? totalAmountOfSlides - 1 : prevIndex - 1;
          break;
        case 'right':
          newIndex = prevIndex === 2 ? 0 : prevIndex + 1;
          break;
        default:
          break;
      }

      return newIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide('right');
    }, 5000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    const phoneInterval = setInterval(() => {
      setHomeBanner((prevBanner: string) => {
        const currentPhoneBannerIndex = banners.indexOf(prevBanner);
        const newPhoneBannerIndex =
          (currentPhoneBannerIndex + 1) % banners.length;

        return banners[newPhoneBannerIndex];
      });
    }, 5000);

    return () => clearInterval(phoneInterval);
  });

  useEffect(() => {
    getCompleteListOfProducts('products').then(
      (receivedListOfProducts: ProductType[]) => {
        setListOfProducts(receivedListOfProducts);
      },
    );
  }, []);

  const handleLeftSliceChange = () => {
    setSliceStart(prevStart => prevStart - 1);
    setSliceEnd(prevEnd => prevEnd - 1);
  };

  const handleRightSliceChange = () => {
    setSliceStart(prevStart => prevStart + 1);
    setSliceEnd(prevEnd => prevEnd + 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      moveSlide('right');
    } else if (touchStartX.current - touchEndX.current < -50) {
      moveSlide('left');
    }
  };

  return (
    <div className="home">
      <div className="home__bottom">
        <h1 className="home__bottom--title">Welcome to Nice Gadgets store!</h1>
        <div
          className="home__bottom__slider"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <a className="home__bottom__slider__img" href="#">
            <img
              src={homeBanner}
              className="home__bottom__slider__img--banner"
              alt="Home Page Banner"
            />
            {currentIndex === 0 ? (
              <img
                src={banner_tablet1}
                className="home__bottom__slider__img--tablet"
                alt="Home Page Banner"
              />
            ) : currentIndex === 1 ? (
              <img
                src={banner_tablet2}
                className="home__bottom__slider__img--tablet"
                alt="Home Page Banner"
              />
            ) : (
              <img
                src={banner_tablet3}
                className="home__bottom__slider__img--tablet"
                alt="Home Page Banner"
              />
            )}
          </a>
        </div>
        <div className="home__bottom--slider">
          <div
            onClick={() => changeImage(phone_banner1)}
            className={classNames('home__bottom--slider__left', {
              'home__bottom--slider__is-active': homeBanner === phone_banner1,
            })}
          ></div>
          <div
            onClick={() => changeImage(phone_banner2)}
            className={classNames('home__bottom--slider__left', {
              'home__bottom--slider__is-active': homeBanner === phone_banner2,
            })}
          ></div>
          <div
            onClick={() => changeImage(phone_banner3)}
            className={classNames('home__bottom--slider__left', {
              'home__bottom--slider__is-active': homeBanner === phone_banner3,
            })}
          ></div>
        </div>
      </div>

      <>
        <section className="home__new__models">
          <h2 className="home__new__models--title">Brand new models</h2>
          <Slider
            handleLeftSlide={handleLeftSliceChange}
            handleRightSlide={handleRightSliceChange}
          />
        </section>
        <div className="home__product-card__scroll">
          <ul className="home__product-card__scroll__content">
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

        <section className="home__categories">
          <h2 className="home__categories--title">Shop by category</h2>

          <ul className="home__categories--list">
            <li className="home__categories--list--phones">
              <div className="home__categories--list--phones--wrapper">
                <img
                  src={phone_category}
                  alt="Category Phones"
                  className="home__categories--list--phones--img"
                />
              </div>
              <h3>Mobile phones</h3>
              <p>95 models</p>
            </li>

            <li className="home__categories--list--tablets">
              <div className="home__categories--list--tablets--wrapper">
                <img
                  src={tablet_category}
                  className="home__categories--list--tablets--img"
                  alt="Category Tablets"
                />
              </div>
              <h3>Tablets</h3>
              <p>24 models</p>
            </li>

            <li className="home__categories--list--accessories">
              <div className="home__categories--list--accessories--wrapper">
                <img
                  src={accessory_category}
                  className="home__categories--list--accessories--img"
                  alt="Category Accessories"
                />
              </div>
              <h3>Accessories</h3>
              <p>100 models</p>
            </li>
          </ul>
        </section>

        <section className="home__hot--prices">
          <h2 className="home__hot--prices--title">Hot prices</h2>
          <Slider
            handleLeftSlide={handleLeftSliceChange}
            handleRightSlide={handleRightSliceChange}
          />
        </section>
        <div className="home__product-card__scroll">
          <ul className="home__product-card__scroll__content">
            {listOfProducts
              .sort((product1, product2) => product1.price - product2.price)
              .slice(sliceStart, sliceEnd)
              .map((product, index) => (
                <ProductCard
                  key={index}
                  itemId={product.itemId}
                  productImg={product.image}
                  productName={product.name}
                  price={product.fullPrice}
                  discountPrice={product.price}
                  screen={product.screen}
                  capacity={product.capacity}
                  ram={product.ram}
                />
              ))}
          </ul>
        </div>
      </>
    </div>
  );
};

export default HomePage;
