import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { PaginationProps } from "./pagination.types";
import Button from "../Button";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const getVisiblePages = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }

    if (currentPage >= totalPages - 3) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const pages = getVisiblePages();

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        uiVariant="pagination"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <LeftOutlined />
        Previous
      </Button>

      {pages.map((item, index) =>
        item === "..." ? (
          <span key={`ellipsis-${index}`} className="px-2 text-slate-500">
            ...
          </span>
        ) : (
          <Button
            key={item}
            uiVariant={item === currentPage ? "paginationActive" : "pagination"}
            onClick={() => onPageChange(Number(item))}
          >
            {item}
          </Button>
        ),
      )}

      <Button
        uiVariant="pagination"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
        <RightOutlined />
      </Button>
    </div>
  );
};

export default Pagination;
