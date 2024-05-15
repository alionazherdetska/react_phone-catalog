import React, { useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard';
import home_icon from '../../assets/icons/home.svg';
import gray_slider_left from '../../assets/icons/slider_gray_left.svg';
import { getCompleteListOfProducts } from '../../services/fetchClients';
import { Pagination } from '../Pagination';
import { ProductType } from '../../types/types';

type SortingField = 'Alphabetically' | 'Cheapest' | 'Newest';

const Phones: React.FC = () => {
  const [phones, setPhones] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(4);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [sortingOption, setSortingOption] =
    useState<SortingField>('Alphabetically');
  const [phonesToRender, setPhonesToRender] = useState<ProductType[]>([]);

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
        const receivedPhones = receivedListOfProducts.filter(
          product => product.category === 'phones',
        );

        sortProducts(receivedPhones, sortingOption);

        setPhones(receivedPhones);
        setTotalItems(receivedPhones.length);
      },
    );
  }, [sortingOption]);

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
        <p>{totalItems} models</p>
      </section>

      <section className="phones__main">
        <div className="phones__main__sorting-by">
          <label htmlFor="sortingBy">Sort by</label>
          <select
            id="sortingBy"
            onChange={e => setSortingOption(e.target.value as SortingField)}
          >
            <option className="phones__main__sorting-by__option">
              Alphabetically
            </option>
            <option className="phones__main__sorting-by__option">Newest</option>
            <option className="phones__main__sorting-by__option">
              Cheapest
            </option>
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
              itemId={phone.itemId}
              productImg={phone.image}
              productName={phone.name}
              price={phone.fullPrice}
              discountPrice={phone.price}
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
