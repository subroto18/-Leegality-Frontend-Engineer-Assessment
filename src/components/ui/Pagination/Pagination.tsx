import clsx from "clsx";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { PaginationProps } from "./pagination.types";
import { paginationClasses } from "./pagination.config";
import Button from "../Button";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
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

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          uiVariant={page === currentPage ? "paginationActive" : "pagination"}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}

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
