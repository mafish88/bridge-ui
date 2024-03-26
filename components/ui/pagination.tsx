import clsx from "clsx";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const ELLIPSIS: string = "…";

  const { floor, min, max } = Math;
  const range = (lo: number, hi: number) =>
    Array.from({ length: hi - lo }, (_, i) => i + lo);

  const pagination =
    (count: number, ellipsis = ELLIPSIS) =>
    (page: number, total: number) => {
      const start = max(
        1,
        min(page - floor((count - 3) / 2), total - count + 2)
      );
      const end = min(total, max(page + floor((count - 2) / 2), count - 1));
      return [
        ...(start > 2 ? [1, ellipsis] : start > 1 ? [1] : []),
        ...range(start, end + 1),
        ...(end < total - 1 ? [ellipsis, total] : end < total ? [total] : []),
      ];
    };

  const getPageNumbers = (currentPage: number, totalPages: number) => {
    const visibleCount = 7; // Adjust this number to show more or fewer page numbers
    return pagination(visibleCount)(currentPage, totalPages);
  };

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <nav aria-label="Table navigation" className="flex justify-end">
      <div className="join">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={clsx(
            "join-item btn",
            currentPage === 1 && "cursor-not-allowed"
          )}
          aria-label="Previous"
        >
          «
        </button>
        {pageNumbers.map((number, index) =>
          number === ELLIPSIS ? (
            <button
              key={`ellipsis-${index}`}
              className="disabled:cursor-default join-item btn"
              disabled
            >
              {number}
            </button>
          ) : (
            <button
              key={`page-${number}`}
              onClick={() => onPageChange(Number(number))}
              className={clsx(
                "join-item btn",
                currentPage === Number(number) && "btn-active"
              )} // Active page styles
            >
              {number}
            </button>
          )
        )}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={clsx(
            "join-item btn",
            currentPage === totalPages && "cursor-not-allowed"
          )}
          aria-label="Next"
        >
          »
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
