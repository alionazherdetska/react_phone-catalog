import gray_slider from '../../assets/icons/slider_gray.svg';
import black_slider from '../../assets/icons/slider_black.svg';
import { Link } from 'react-router-dom';

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
        <Link
          onClick={() => handlePageClick(currentPage - 1)}
          aria-disabled={currentPage === 1 ? 'true' : 'false'}
          to={`/${currentPage - 1}`}
        ></Link>
        <img src={gray_slider} alt="Slider to the left" />
      </li>
      <ul className="phones--slider--pages">
        {pageNumbers.map(page => (
          <li key={page}>
            <Link
              className="page-link"
              to={`/${page}`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>

      <li className="phones--slider--layout">
        <Link
          onClick={() => handlePageClick(currentPage + 1)}
          aria-disabled={currentPage === 1 ? 'true' : 'false'}
          to={`/${currentPage + 1}`}
        ></Link>
        <img src={black_slider} alt="Slider to the left" />
      </li>
    </ul>
  );
};

export default Pagination;
