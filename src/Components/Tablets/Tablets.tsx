import React, { useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard';
import home_icon from '../../assets/icons/home.svg';
import gray_slider_left from '../../assets/icons/slider_gray_left.svg';
import gray_slider_right from '../../assets/icons/slider_gray_left.svg';
import { getAllProducts } from '../../services/fetchClients';
import Product from '../../types/types';

const Tablets: React.FC = () => {
  const [tablets, setTablets] = useState<Product[]>([]);

  function getTablets() {
    getAllProducts('tablets').then((receivedTablets: Product[]) => {
      setTablets(receivedTablets);
    });
  }

  useEffect(() => {
    getTablets();
  }, []);

  return (
    <div className="phones" id="#phones">
      <section className="phones__top">
        <div className="phones__top--search-params">
          <div className="phones__top--search-params__icons">
            <img
              src={home_icon}
              className="phones__top--search-params__icons-home"
              alt="Home"
            />

            <img
              src={gray_slider_left}
              className="phones__top--search-params__icons-slider"
              alt="Slider"
            />
          </div>

          <h4 className="phones__top--search-params__name">Tablets</h4>
        </div>
        <h1>Tablets</h1>
        <p>95 models</p>
      </section>

      <section className="phones__main">
        <div className="phones__main__sorting-by">
          <label htmlFor="sortingBy">Sort by</label>
          <select id="sortingBy">
            <option className="phones__main__sorting-by__option">Newest</option>
          </select>
        </div>

        <div className="phones__main__amount">
          <label htmlFor="perPage">Items on page</label>
          <select id="perPage">
            <option>16</option>
          </select>
        </div>
      </section>
      <div className="phones__product-card">
        {tablets.map((tablet, index) => (
          <li key={index}>
            <ProductCard
              productImg={tablet.images[0]}
              productName={tablet.name}
              price={tablet.priceRegular}
              discountPrice={tablet.priceDiscount}
              screen={tablet.screen}
              capacity={tablet.capacity}
              ram={tablet.ram}
            />
          </li>
        ))}
      </div>

      <ul className="phones--slider">
        <li className="phones--slider--layout">
          <img src={gray_slider_left} alt="Slider to the left" />
        </li>
        <ul className="phones--slider--pages">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>

        <li className="phones--slider--layout">
          <img src={gray_slider_right} alt="Slider to the right" />
        </li>
      </ul>
    </div>
  );
};

export default Tablets;
