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
  const [isMobile, setIsMobile] = useState(false);
  const [totalPages, setTotalPages] = useState(Math.ceil(totalItems / perPage));

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / perPage));
    const isMobileDevice = window.matchMedia('(max-width: 768px)').matches;

    setIsMobile(isMobileDevice);
  }, [totalItems, perPage]);

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const generatePageNumbers = () => {
    const range = 2;
    const start = Math.max(1, currentPage - range);
    const end = Math.min(totalPages, start + 2 * range - 1);

    const pageNumbers: (number | string)[] = [];

    if (start > 1) {
      pageNumbers.push(1);
      if (start > 2 && !isMobile) {
        pageNumbers.push('...');
      }
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1 && !isMobile) {
        pageNumbers.push('...');
      }

      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <ul className="pagination--slider">
      <button
        className="pagination--slider--layout pagination--slider--layout--prev"
        onClick={() => {
          handlePageClick(currentPage - 1);
        }}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      ></button>
      <ul className="pagination--slider--pages">
        {generatePageNumbers().map((page, index) => (
          <button
            key={index}
            className={
              page === currentPage
                ? 'pagination--slider--layout--active'
                : 'pagination--slider--layout'
            }
            onClick={() => {
              if (typeof page === 'number') {
                handlePageClick(page);
              }
            }}
          >
            {page}
          </button>
        ))}
      </ul>
      <button
        className="pagination--slider--layout pagination--slider--layout--next"
        onClick={() => {
          handlePageClick(currentPage + 1);
        }}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      ></button>
    </ul>
  );
};

export default Pagination;
