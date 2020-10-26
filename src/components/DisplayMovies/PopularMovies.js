import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// action creator(s)
import { popularMovies as popularMoviesAction } from '../../redux/actionCreators/popularMovies';
import { emptyMoviesArray as clearMoviesArrayOnMountAction } from '../../redux/actionCreators/emptyMoviesArray';

// components
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import MovieCard from '../MovieCard/MovieCard';
import LoadMoreMoviesButton from '../LoadMoreMoviesButton/LoadMoreMoviesButton';

const PopularMovies = (props) => {
  const {
    popularMoviesAction,
    clearMoviesArrayOnMountAction,
    popularMoviesList,
    isLoading,
  } = props;

  // current page of movie results
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // on mount make sure movies array is empty
    clearMoviesArrayOnMountAction();
  }, [clearMoviesArrayOnMountAction]);

  useEffect(() => {
    // fetch popular movies on component mount and when page number changes to load more movies -- pass page number in
    popularMoviesAction(currentPage);
  }, [currentPage, popularMoviesAction]);

  return (
    <div>
      <div className="display_movies_container">
        <h2 className="display_movies_title">Popular Movies</h2>
        <div className="movie_card_container">
          {popularMoviesList &&
            popularMoviesList.map((movie, index) => (
              <MovieCard movie={movie} key={index} />
            ))}
        </div>
        {
          // show button if not currently loading - else show loading spinner
          !isLoading ? (
            <LoadMoreMoviesButton
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : (
            <LoadingSpinner />
          )
        }
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
  clearMoviesArrayOnMountAction,
};
// export default PopularMovies;
export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies);
