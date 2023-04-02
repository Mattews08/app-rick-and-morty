import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import * as S from "./styles";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = [];
  let startPage = 1;
  let endPage = totalPages;

  if (totalPages > 5) {
    if (currentPage <= 3) {
      endPage = 5;
    } else if (currentPage + 2 >= totalPages) {
      startPage = totalPages - 4;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <S.NavContainer>
      <S.PagenationButton
        className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={handlePrevClick}
      >
        <MdKeyboardArrowLeft />
      </S.PagenationButton>

      {pageNumbers.map((page) => (
        <S.PaginationNumber
          key={page}
          className={`page-item ${currentPage === page ? "active" : ""}`}
          current={page === currentPage}
        >
          <S.NumberWrapper onClick={() => onPageChange(page)}>
            {page}
          </S.NumberWrapper>
        </S.PaginationNumber>
      ))}

      <S.PagenationButton
        className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
        onClick={handleNextClick}
      >
        <MdKeyboardArrowRight />
      </S.PagenationButton>
    </S.NavContainer>
  );
};

export default Pagination;
