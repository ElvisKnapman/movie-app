import React from 'react';

const LoadMoreMoviesButton = ({ setCurrentPage, currentPage }) => {
  return (
    <div className="load_more_movies_container">
      <button
        className="load_more_movies_btn"
        onClick={() => setCurrentPage(currentPage + 1)}>
        Load More Movies
      </button>
    </div>
  );
};

export default LoadMoreMoviesButton;
