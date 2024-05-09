import gray_slider from '../../assets/icons/slider_gray.svg';
import black_slider from '../../assets/icons/slider_black.svg';
import { useEffect, useState } from 'react';

interface PaginationProps {
  totalItems: number;
  perPage: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  perPage,
  currentPage = 1,
  onPageChange,
}) => {
  const [totalPages, setTotalPages] = useState(Math.ceil(totalItems / perPage));

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / perPage));
  }, [totalItems, perPage]);

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const generatePageNumbers = () => {
    const range = 4;
    const start = Math.max(1, currentPage - range);
    const end = Math.min(totalPages, currentPage + range);

    const pageNumbers: number[] = [];

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <ul className="pagination--slider">
      <button
        className="pagination--slider--layout"
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        <img src={gray_slider} alt="Slider to the left" />
      </button>
      <ul className="pagination--slider--pages">
        {generatePageNumbers().map(page => (
          <button
            key={page}
            className={
              currentPage === page
                ? 'pagination--slider--layout--active'
                : 'pagination--slider--layout'
            }
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}
      </ul>
      <button
        className="pagination--slider--layout"
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        <img src={black_slider} alt="Slider to the right" />
      </button>
    </ul>
  );
};

export default Pagination;
