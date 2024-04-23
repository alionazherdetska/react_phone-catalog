import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Slider } from '../Slider';
import { ProductCard } from '../ProductCard';

const ItemCard: React.FC = () => {
  return (
    <div className="item-card">
      <Header />

      <section className="item-card__top">
        <div className="item-card__top--search-params">
          <div className="item-card__top--search-params__icons">
            <img
              src="/icons/home.svg"
              className="item-card__top--search-params__icons-home"
              alt="Home"
            />
            <img
              src="/icons/slider_gray.svg"
              className="item-card__top--search-params__icons-slider"
              alt="Slider"
            />
          </div>

          <h4 className="item-card__top--search-params__name">Phones</h4>
          <img
            src="/icons/slider_gray.svg"
            className="item-card__top--search-params__icons-slider"
            alt="Slider"
          />
          <h4 className="item-card__top--search-params__name--exact">
            Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
          </h4>
        </div>

        <div className="item-card__top--search-params__back">
          <img
            src="/icons/slider_black.svg"
            className="phones__top--search-params__icons-slider"
            alt="Slider"
          />
          <h4 className="item-card__top--search-params__name">Back</h4>
        </div>
        <h1>Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</h1>
      </section>

      <main className="item-card__main">
        <div className="item-card__main__front-img">
          <img src="/img/layout/iphone11pro_1.png" alt="Iphone" />
        </div>

        <div className="item-card__main__bottom-imgs">
          <img src="/img/layout/iphone11pro_1.png" alt="Iphone" />
          <img src="/img/layout/iphone11pro_2.png" alt="Iphone" />
          <img src="/img/layout/iphone11pro_3.png" alt="Iphone" />
          <img src="/img/layout/iphone11pro_4.png" alt="Iphone" />
          <img src="/img/layout/iphone11pro_5.png" alt="Iphone" />
        </div>

        <div className="item-card__main__colors-label">
          <p>Available colors</p>
          <p>ID: 802390</p>
        </div>
        <div className="item-card__main__actual-colors">
          <img src="/img/layout/colors/terracota.svg" alt="Terracota color" />
          <img src="/img/layout/colors/slate_gray.svg" alt="Slate gray color" />
          <img src="/img/layout/colors/dark_gray.svg" alt="Dark gray color" />
          <img src="/img/layout/colors/light_gray.svg" alt="Light gray color" />
        </div>

        <div className="item-card__main__capacity">
          <p>Select capacity</p>
        </div>
        <div className="item-card__main__capacity--options">
          <button className="item-card__main__capacity--options-active">
            64 GB
          </button>
          <button className="item-card__main__capacity--options-passive">
            256 GB
          </button>
          <button className="item-card__main__capacity--options-passive">
            512 GB
          </button>
        </div>

        <div className="item-card__main__price">
          <span className="item-card__main__price--discount">$799</span>
          <span className="item-card__main__price--original">$1199</span>
        </div>

        <div className="item-card__main--bottom">
          <button className="item-card__main--bottom--add">Add to cart</button>
          <button className="item-card__main--bottom--like">
            <img src="/icons/heart.svg" />
          </button>
        </div>

        <div className="item-card__main--properties">
          <div className="item-card__main--properties--specific">
            <p>Screen</p>
            <span>6.5” OLED</span>
          </div>

          <div className="item-card__main--properties--specific">
            <p>Resolution</p>
            <span>2688x1242</span>
          </div>

          <div className="item-card__main--properties--specific">
            <p>Processor</p>
            <span>Apple A12 Bionic</span>
          </div>

          <div className="item-card__main--properties--specific">
            <p>RAM</p>
            <span>3 GB</span>
          </div>
        </div>

        <div className="item-card__main__general">
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

        <div className="item-card__main__tec-specs">
          <h2>Tech specs</h2>
          <div className="item-card__main--properties">
            <div className="item-card__main--properties--specific">
              <p>Screen</p>
              <span>6.5” OLED</span>
            </div>

            <div className="item-card__main--properties--specific">
              <p>Resolution</p>
              <span>2688x1242</span>
            </div>

            <div className="item-card__main--properties--specific">
              <p>Processor</p>
              <span>Apple A12 Bionic</span>
            </div>

            <div className="item-card__main--properties--specific">
              <p>RAM</p>
              <span>3 GB</span>
            </div>

            <div className="item-card__main--properties--specific">
              <p>Built in memory</p>
              <span>64 GB</span>
            </div>

            <div className="item-card__main--properties--specific">
              <p>Camera</p>
              <span>12 Mp + 12 Mp + 12 Mp (Triple)</span>
            </div>

            <div className="item-card__main--properties--specific">
              <p>Zoom</p>
              <span>Optical, 2x</span>
            </div>

            <div className="item-card__main--properties--specific">
              <p>Cell</p>
              <span>GSM, LTE, UMTS</span>
            </div>
          </div>
        </div>

        <div className="item-card__main__suggestions">
          <h2>You may also like</h2>
          <Slider />
        </div>
      </main>

      <div className="item-card__product-card">
        <ProductCard />
      </div>
      <Footer />
    </div>
  );
};

export default ItemCard;
