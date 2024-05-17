import React, { useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard';
import home_icon from '../../assets/icons/home.svg';
import gray_slider_left from '../../assets/icons/slider_gray_left.svg';
import { getCompleteListOfProducts } from '../../services/fetchClients';
import { Pagination } from '../Pagination';
import { ProductType } from '../../types/types';
import { Link } from 'react-router-dom';

type SortingField = 'Alphabetically' | 'Cheapest' | 'Newest';

const Accessories: React.FC = () => {
  const [accessories, setAccessories] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(4);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [sortingOption, setSortingOption] =
    useState<SortingField>('Alphabetically');
  const [accessoriesToRender, setAccessoriesToRender] = useState<ProductType[]>(
    [],
  );

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
        const receivedaccessories = receivedListOfProducts.filter(
          product => product.category === 'accessories',
        );

        sortProducts(receivedaccessories, sortingOption);

        setAccessories(receivedaccessories);
        setTotalItems(receivedaccessories.length);
      },
    );
  }, [sortingOption]);

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
          <Link to="/" className="accessories__top--search-params__icons">
            <img
              src={home_icon}
              className="accessories__top--search-params__icons-home"
              alt="Home"
            />
          </Link>
          <img
            src={gray_slider_left}
            className="accessories__top--search-params__icons-slider"
            alt="Slider"
          />
          <h4 className="accessories__top--search-params__name">Accessories</h4>
        </div>
        <h1>Accessories</h1>
        <p>{totalItems} models</p>
      </section>

      <section className="accessories__main">
        <div className="accessories__main__sorting-by">
          <label htmlFor="sortingBy">Sort by</label>
          <select
            id="sortingBy"
            onChange={e => setSortingOption(e.target.value as SortingField)}
          >
            <option className="accessories__main__sorting-by__option">
              Alphabetically
            </option>
            <option className="accessories__main__sorting-by__option">
              Newest
            </option>
            <option className="accessories__main__sorting-by__option">
              Cheapest
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
              <option
                key={option}
                className="accessories__main__sorting-by__option"
              >
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
              itemId={accessory.itemId}
              productImg={accessory.image}
              productName={accessory.name}
              price={accessory.fullPrice}
              discountPrice={accessory.price}
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
