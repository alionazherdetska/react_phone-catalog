import React, { useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard';
import home_icon from '../../assets/icons/home.svg';
import gray_slider_left from '../../assets/icons/slider_gray_left.svg';
import { getAllProducts } from '../../services/fetchClients';
import Product from '../../types/types';
import { Pagination } from '../Pagination';

const Tablets: React.FC = () => {
  const [tablets, setTablets] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(4);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [tabletsToRender, setTabletsToRender] = useState<Product[]>([]);

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

  function getTablets() {
    getAllProducts('tablets').then((receivedTablets: Product[]) => {
      setTablets(receivedTablets);
      setTotalItems(receivedTablets.length);
    });
  }

  useEffect(() => {
    getTablets();
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    const tabletsToRenderSubset = tablets.slice(startIndex, endIndex);

    setTabletsToRender(tabletsToRenderSubset);
  }, [currentPage, itemsPerPage, tablets, totalItems]);

  return (
    <div className="tablets" id="#tablets">
      <section className="tablets__top">
        <div className="tablets__top--search-params">
          <div className="tablets__top--search-params__icons">
            <img
              src={home_icon}
              className="tablets__top--search-params__icons-home"
              alt="Home"
            />
            <img
              src={gray_slider_left}
              className="tablets__top--search-params__icons-slider"
              alt="Slider"
            />
          </div>
          <h4 className="tablets__top--search-params__name">Tablets</h4>
        </div>
        <h1>Tablets</h1>
        <p>95 models</p>
      </section>

      <section className="tablets__main">
        <div className="tablets__main__sorting-by">
          <label htmlFor="sortingBy">Sort by</label>
          <select id="sortingBy">
            <option className="tablets__main__sorting-by__option">All</option>
          </select>
        </div>

        <div className="tablets__main__amount">
          <label htmlFor="perPage">Items on page</label>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            id="perPage"
          >
            {perPageOptions.map(option => (
              <option
                key={option}
                className="tablets__main__sorting-by__option"
              >
                {option}
              </option>
            ))}
          </select>
        </div>
      </section>

      <div className="tablets__product-card">
        {tabletsToRender.map((tablet, index) => (
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

      <Pagination
        totalItems={totalItems}
        perPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Tablets;
