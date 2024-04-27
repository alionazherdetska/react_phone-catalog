import React, { useState } from 'react';
import classNames from 'classnames';

import { Slider } from '../Slider';
import { ProductCard } from '../ProductCard';

import home_icon from '../../assets/icons/home.svg';
import heart_icon from '../../assets/icons/heart.svg';
import gray_slider from '../../assets/icons/slider_gray.svg';
import black_slider from '../../assets/icons/slider_black.svg';
import banner_photo from '../../assets/layout/iphone11pro_1.png';
import small_photo_2 from '../../assets/layout/iphone11pro_2.png';
import small_photo_3 from '../../assets/layout/iphone11pro_3.png';
import small_photo_4 from '../../assets/layout/iphone11pro_4.png';
import small_photo_5 from '../../assets/layout/iphone11pro_5.png';
import terracota from '../../assets/layout/colors/terracota.svg';
import slate_gray from '../../assets/layout/colors/slate_gray.svg';
import dark_gray from '../../assets/layout/colors/dark_gray.svg';
import light_gray from '../../assets/layout/colors/light_gray.svg';

const ItemCard: React.FC = () => {
  const [bannerPhoto, setBannerPhoto] = useState(banner_photo);

  const handleImageChange = (newBannerPhoto: File) => {
    setBannerPhoto(newBannerPhoto);
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
              src={gray_slider}
              className="item-card__top--search-params__icons-slider"
              alt="Slider"
            />
          </div>

          <h4 className="item-card__top--search-params__name">Phones</h4>
          <img
            src={gray_slider}
            className="item-card__top--search-params__icons-slider"
            alt="Slider"
          />
          <h4 className="item-card__top--search-params__name--exact">
            Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
          </h4>
        </div>

        <div className="item-card__top--search-params__back">
          <img
            src={black_slider}
            className="phones__top--search-params__icons-slider"
            alt="Slider"
          />
          <h4 className="item-card__top--search-params__back__name">Back</h4>
        </div>
        <h1>Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</h1>
      </section>

      <main className="item-card__main">
        <div className="item-card__main__imgs">
          <div className="item-card__main__imgs__front-img">
            <img src={bannerPhoto} alt="Iphone" />
          </div>

          <div className="item-card__main__imgs__bottom-imgs">
            <img
              src={banner_photo}
              className={classNames({
                'is-active': bannerPhoto === banner_photo,
              })}
              onClick={() => handleImageChange(banner_photo)}
              alt="Iphone"
            />

            <img
              src={small_photo_2}
              className={classNames({
                'is-active': bannerPhoto === small_photo_2,
              })}
              onClick={() => handleImageChange(small_photo_2)}
              alt="Iphone"
            />

            <img
              src={small_photo_3}
              className={classNames({
                'is-active': bannerPhoto === small_photo_3,
              })}
              onClick={() => handleImageChange(small_photo_3)}
              alt="Iphone"
            />

            <img
              className={classNames({
                'is-active': bannerPhoto === small_photo_4,
              })}
              onClick={() => handleImageChange(small_photo_4)}
              src={small_photo_4}
              alt="Iphone"
            />

            <img
              className={classNames({
                'is-active': bannerPhoto === small_photo_5,
              })}
              onClick={() => handleImageChange(small_photo_5)}
              src={small_photo_5}
              alt="Iphone"
            />
          </div>
        </div>

        <div className="item-card__main__info">
          <div className="item-card__main__info__colors-label">
            <p>Available colors</p>
            <p>ID: 802390</p>
          </div>
          <div className="item-card__main__info__actual-colors">
            <img src={terracota} alt="Terracota color" />
            <img src={slate_gray} alt="Slate gray color" />
            <img src={dark_gray} alt="Dark gray color" />
            <img src={light_gray} alt="Light gray color" />
          </div>

          <div className="item-card__main__info__capacity">
            <p>Select capacity</p>
          </div>
          <div className="item-card__main__info__capacity-options">
            <button className="item-card__main__info__capacity-options-active">
              64 GB
            </button>
            <button className="item-card__main__info__capacity-options-passive">
              256 GB
            </button>
            <button className="item-card__main__info__capacity-options-passive">
              512 GB
            </button>
          </div>

          <div className="item-card__main__info__price">
            <span className="item-card__main__info__price--discount">$799</span>
            <span className="item-card__main__info__price--original">
              $1199
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
              <span>6.5” OLED</span>
            </div>

            <div className="item-card__main__info--properties--specific">
              <p>Resolution</p>
              <span>2688x1242</span>
            </div>

            <div className="item-card__main__info--properties--specific">
              <p>Processor</p>
              <span>Apple A12 Bionic</span>
            </div>

            <div className="item-card__main__info--properties--specific">
              <p>RAM</p>
              <span>3 GB</span>
            </div>
          </div>
        </div>
      </main>

      <div className="item-card__about">
        <div className="item-card__about__general">
          <h2>About</h2>
          <h3>And then there was Pro</h3>
          <p>
            A transformative triple‑camera system that adds tons of capability
            without complexity.
          </p>
          <br></br>
          <p>
            An unprecedented leap in battery life. And a mind‑blowing chip that
            doubles down on machine learning and pushes the boundaries of what a
            smartphone can do. Welcome to the first iPhone powerful enough to be
            called Pro.
          </p>
          <h3>Camera</h3>
          <p>
            Meet the first triple‑camera system to combine cutting‑edge
            technology with the legendary simplicity of iPhone. Capture up to
            four times more scene. Get beautiful images in drastically lower
            light. Shoot the highest‑quality video in a smartphone — then edit
            with the same tools you love for photos. You’ve never shot with
            anything like it.
          </p>
          <h3>
            Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
            Love it.
          </h3>
          <p>
            iPhone 11 Pro lets you capture videos that are beautifully true to
            life, with greater detail and smoother motion. Epic processing power
            means it can shoot 4K video with extended dynamic range and
            cinematic video stabilization — all at 60 fps. You get more creative
            control, too, with four times more scene and powerful new editing
            tools to play with.
          </p>
        </div>

        <div className="item-card__about__tec-specs">
          <h2>Tech specs</h2>
          <div className="item-card__about--properties">
            <div className="item-card__about--properties--specific">
              <p>Screen</p>
              <span>6.5” OLED</span>
            </div>

            <div className="item-card__about--properties--specific">
              <p>Resolution</p>
              <span>2688x1242</span>
            </div>

            <div className="item-card__about--properties--specific">
              <p>Processor</p>
              <span>Apple A12 Bionic</span>
            </div>

            <div className="item-card__about--properties--specific">
              <p>RAM</p>
              <span>3 GB</span>
            </div>

            <div className="item-card__about--properties--specific">
              <p>Built in memory</p>
              <span>64 GB</span>
            </div>

            <div className="item-card__about--properties--specific">
              <p>Camera</p>
              <span>12 Mp + 12 Mp + 12 Mp (Triple)</span>
            </div>

            <div className="item-card__about--properties--specific">
              <p>Zoom</p>
              <span>Optical, 2x</span>
            </div>

            <div className="item-card__about--properties--specific">
              <p>Cell</p>
              <span>GSM, LTE, UMTS</span>
            </div>
          </div>
        </div>

        <div className="item-card__about__suggestions">
          <h2>You may also like</h2>
          <Slider />
        </div>
      </div>

      <div className="item-card__scroll">
        <ul className="item-card__scroll__content">
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ItemCard;
