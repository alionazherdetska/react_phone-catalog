import gray_slider from '../../assets/icons/slider_gray.svg';
import black_slider from '../../assets/icons/slider_black.svg';

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
  const totalPages = Math.ceil(totalItems / perPage);
  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const pageNumbers: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="phones--slider">
      <li className="phones--slider--layout">
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous Page"
        >
          <img src={gray_slider} alt="Slider to the left" />
        </button>
      </li>
      <ul className="phones--slider--pages">
        {pageNumbers.map(page => (
          <li key={page}>
            <button
              className={currentPage === page ? 'page-link active' : 'page-link'}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>

      <li className="phones--slider--layout">
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next Page"
        >
          <img src={black_slider} alt="Slider to the right" />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
