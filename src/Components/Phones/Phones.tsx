import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { ProductCard } from '../ProductCard';

const Phones: React.FC = () => {
  return (
    <>
      <Header />
      <main className="phones">
        <section className="phones__top">
          <img src="" />
          <img src="" />
          <h4>Phones</h4>
          <h1>Mobile phones</h1>
          <p>95 models</p>
        </section>
        <section className="phones__main">
          <div className="phones__main__sorting">
            <select className="phones__main__sorting--by">
              <option>Newest</option>
            </select>
            <select className="phones__main__sorting--by">
              <option>16</option>
            </select>
          </div>
        </section>
        <ul className="phones__list">
          <div className="phones__list__product-card">
            <ProductCard />
          </div>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Phones;
