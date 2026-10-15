import { ICONS } from '../../../constants/icons';
import { ButtonSelect } from '../../atoms/Buttons/ButtonSelect';
import { Icon } from '../../atoms/Icon/Icon';

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const arrowButtonClass =
  'flex h-9 w-9 items-center justify-center border border-elements hover:border-primary disabled:cursor-not-allowed disabled:opacity-40';

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: Props) => {
  if (totalPages <= 1) {
    return null;
  }

  const visiblePageCount = Math.min(4, totalPages);
  const firstVisiblePage = Math.min(
    Math.max(currentPage - 1, 1),
    totalPages - visiblePageCount + 1,
  );
  const pageNumbers = Array.from(
    { length: visiblePageCount },
    (_, index) => firstVisiblePage + index,
  );
  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex justify-center gap-4"
    >
      <button
        type="button"
        aria-label="Pervious page"
        className={arrowButtonClass}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <Icon
          src={ICONS.ARROW.LEFT}
          className="size-4"
          isDisabled={currentPage === 1}
        />
      </button>

      <div className="flex gap-2">
        {pageNumbers.map((page) => (
          <ButtonSelect
            key={page}
            content={String(page)}
            className="h-8 w-8"
            isSelected={page === currentPage}
            handleClick={() => onPageChange(page)}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="Next page"
        className={arrowButtonClass}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <Icon
          src={ICONS.ARROW.RIGHT}
          className="size-4"
          isDisabled={currentPage === totalPages}
        />
      </button>
    </nav>
  );
};
