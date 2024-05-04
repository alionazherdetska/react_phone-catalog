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
        <a
          onClick={() => handlePageClick(currentPage - 1)}
          aria-disabled={currentPage === 1 ? 'true' : 'false'}
          href="#prev"
        ></a>
        <img src={gray_slider} alt="Slider to the left" />
      </li>
      <ul className="phones--slider--pages">
        {pageNumbers.map(page => (
          <li key={page}>
            <a
              className="page-link"
              href={`#${page}`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>

      <li className="phones--slider--layout">
        <a
          onClick={() => handlePageClick(currentPage + 1)}
          aria-disabled={currentPage === 1 ? 'true' : 'false'}
          href="#next"
        ></a>
        <img src={black_slider} alt="Slider to the left" />
      </li>
    </ul>
  );
};

export default Pagination;
