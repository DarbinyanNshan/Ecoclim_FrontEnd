import React from 'react';
import { FaAngleLeft, FaChevronRight } from 'react-icons/fa';
import './style.css';

export const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  const pages = [];

  const handlePageClick = (page) => {
    handlePageChange(page);
    window.scrollTo({ top: 300, behavior: 'smooth' }); 
  };


  if (currentPage > 1) {
    pages.push(
      <button
        key="prev"
        onClick={() => handlePageClick(currentPage - 1)}
        className="pagination-icon"
      >
        <FaAngleLeft /> 
      </button>
    );
  }

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={i === currentPage ? 'active' : ''}
        >
          {i}
        </button>
      );
    } else if (pages[pages.length - 1]?.props.children !== '...') {
      pages.push(<span key={i}>...</span>);
    }
  }


  if (currentPage < totalPages) {
    pages.push(
      <button
        key="next"
        onClick={() => handlePageClick(currentPage + 1)}
        className="pagination-icon"
      >
        <FaChevronRight />
      </button>
    );
  }

  return <div className="pagination">{pages}</div>;
};
