import React, { useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard';
import home_icon from '../../assets/icons/home.svg';
import gray_slider_left from '../../assets/icons/slider_gray_left.svg';
import { getAllProducts } from '../../services/fetchClients';
import Product from '../../types/types';
import { Pagination } from '../Pagination';

const Accessories: React.FC = () => {
  const [accessories, setAccesories] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(4);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [accessoriesToRender, setAccessoriesToRender] = useState<Product[]>([]);

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

  function getAccessories() {
    getAllProducts('accessories').then((receivedAccessories: Product[]) => {
      setAccesories(receivedAccessories);
      setTotalItems(receivedAccessories.length);
    });
  }

  useEffect(() => {
    getAccessories();
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    const accessoriesToRenderSubset = accessories.slice(startIndex, endIndex);

    setAccessoriesToRender(accessoriesToRenderSubset);
  }, [currentPage, itemsPerPage, accessories, totalItems]);

  return (
    <div className="accessories" id="#accessories">
      <section className="accessories__top">
        <div className="accessories__top--search-params">
          <div className="accessories__top--search-params__icons">
            <img
              src={home_icon}
              className="accessories__top--search-params__icons-home"
              alt="Home"
            />
            <img
              src={gray_slider_left}
              className="accessories__top--search-params__icons-slider"
              alt="Slider"
            />
          </div>
          <h4 className="accessories__top--search-params__name">Accessories</h4>
        </div>
        <h1>Accessories</h1>
        <p>95 models</p>
      </section>

      <section className="accessories__main">
        <div className="accessories__main__sorting-by">
          <label htmlFor="sortingBy">Sort by</label>
          <select id="sortingBy">
            <option className="accessories__main__sorting-by__option">
              All
            </option>
          </select>
        </div>

        <div className="accessories__main__amount">
          <label htmlFor="perPage">Items on page</label>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            id="perPage"
          >
            {perPageOptions.map(option => (
              <option key={option} className="accessories__main__sorting-by__option">
                {option}
              </option>
            ))}
          </select>
        </div>
      </section>

      <div className="accessories__product-card">
        {accessoriesToRender.map((accessory, index) => (
          <li key={index}>
            <ProductCard
              productImg={accessory.images[0]}
              productName={accessory.name}
              price={accessory.priceRegular}
              discountPrice={accessory.priceDiscount}
              screen={accessory.screen}
              capacity={accessory.capacity}
              ram={accessory.ram}
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

export default Accessories;
