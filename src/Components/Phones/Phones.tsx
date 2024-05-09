import React, { useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard';
import home_icon from '../../assets/icons/home.svg';
import gray_slider_left from '../../assets/icons/slider_gray_left.svg';
import { getAllProducts } from '../../services/fetchClients';
import Product from '../../types/types';
import { Pagination } from '../Pagination';

const Phones: React.FC = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(4);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [phonesToRender, setPhonesToRender] = useState<Product[]>([]);

  const perPageOptions = [4, 8, 16];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedPerPage = Number(e.target.value);

    setItemsPerPage(selectedPerPage);
    setCurrentPage(1);
  };

  function getPhones() {
    getAllProducts('phones').then((receivedPhones: Product[]) => {
      setPhones(receivedPhones);
      setTotalItems(receivedPhones.length);
    });
  }

  useEffect(() => {
    getPhones();
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    const phonesToRenderSubset = phones.slice(startIndex, endIndex);

    setPhonesToRender(phonesToRenderSubset);
  }, [currentPage, itemsPerPage, phones, totalItems]);

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
          <h4 className="phones__top--search-params__name">Phones</h4>
        </div>
        <h1>Mobile phones</h1>
        <p>95 models</p>
      </section>

      <section className="phones__main">
        <div className="phones__main__sorting-by">
          <label htmlFor="sortingBy">Sort by</label>
          <select id="sortingBy">
            <option className="phones__main__sorting-by__option">All</option>
          </select>
        </div>

        <div className="phones__main__amount">
          <label htmlFor="perPage">Items on page</label>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            id="perPage"
          >
            {perPageOptions.map(option => (
              <option key={option} className="phones__main__sorting-by__option">
                {option}
              </option>
            ))}
          </select>
        </div>
      </section>

      <div className="phones__product-card">
        {phonesToRender.map((phone, index) => (
          <li key={index}>
            <ProductCard
              productImg={phone.images[0]}
              productName={phone.name}
              price={phone.priceRegular}
              discountPrice={phone.priceDiscount}
              screen={phone.screen}
              capacity={phone.capacity}
              ram={phone.ram}
            />
          </li>
        ))}
      </div>

      <Pagination
        totalItems={totalItems}
        perPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Phones;
