import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// action creator(s)
import { popularMovies as popularMoviesAction } from '../../redux/actionCreators/popularMovies';

// components
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import MovieCard from '../MovieCard/MovieCard';
import LoadMoreMoviesButton from '../LoadMoreMoviesButton/LoadMoreMoviesButton';

const PopularMovies = (props) => {
  const { popularMoviesAction, popularMoviesList, isLoading } = props;

  // current page of movie results
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // fetch popular movies on component mount and when page number changes to load more movies -- pass page number in
    popularMoviesAction(currentPage);
  }, [popularMoviesAction, currentPage]);

  if (isLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div>
      <div className="display_movies_container">
        <h2 className="display_movies_title">Popular Movies</h2>
        <div className="movie_card_container">
          {popularMoviesList.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>

        <LoadMoreMoviesButton
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    popularMoviesList: state.popularMovies.movies,
    isLoading: state.popularMovies.isLoading,
    errorMessage: state.popularMovies.error || null,
  };
};
const mapDispatchToProps = {
  popularMoviesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies);
