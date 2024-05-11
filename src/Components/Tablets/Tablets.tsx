import React, { useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard';
import home_icon from '../../assets/icons/home.svg';
import gray_slider_left from '../../assets/icons/slider_gray_left.svg';
import { getCompleteListOfProducts } from '../../services/fetchClients';
import { Pagination } from '../Pagination';
import { ProductType } from '../../types/types';

type SortingField = 'Alphabetically' | 'Cheapest' | 'Newest';

const Tablets: React.FC = () => {
  const [tablets, setTablets] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(4);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [sortingOption, setSortingOption] =
    useState<SortingField>('Alphabetically');
  const [tabletsToRender, setTabletsToRender] = useState<ProductType[]>([]);

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

  function sortProducts(products: ProductType[], sortingField: SortingField) {
    switch (sortingField) {
      case 'Newest':
        products.sort((product1, product2) => product2.year - product1.year);
        break;
      case 'Cheapest':
        products.sort((product1, product2) => product1.price - product2.price);
        break;
      default:
        products.sort((product1, product2) =>
          product1.name.localeCompare(product2.name),
        );
        break;
    }
  }

  useEffect(() => {
    getCompleteListOfProducts('products').then(
      (receivedListOfProducts: ProductType[]) => {
        const receivedTablets = receivedListOfProducts.filter(
          product => product.category === 'tablets',
        );

        sortProducts(receivedTablets, sortingOption);

        setTablets(receivedTablets);
        setTotalItems(receivedTablets.length);
      },
    );
  }, [sortingOption]);

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
          <h4 className="tablets__top--search-params__name">tablets</h4>
        </div>
        <h1>Tablets</h1>
        <p>{totalItems} models</p>
      </section>

      <section className="tablets__main">
        <div className="tablets__main__sorting-by">
          <label htmlFor="sortingBy">Sort by</label>
          <select
            id="sortingBy"
            onChange={e => setSortingOption(e.target.value as SortingField)}
          >
            <option className="tablets__main__sorting-by__option">
              Alphabetically
            </option>
            <option className="tablets__main__sorting-by__option">Newest</option>
            <option className="tablets__main__sorting-by__option">
              Cheapest
            </option>
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
              <option key={option} className="tablets__main__sorting-by__option">
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
              productImg={tablet.image}
              productName={tablet.name}
              price={tablet.fullPrice}
              discountPrice={tablet.price}
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
