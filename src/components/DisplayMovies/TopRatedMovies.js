import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// action creator(s)
import { topRatedMovies as topRatedMoviesAction } from '../../redux/actionCreators/topRatedMovies';

// components
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import MovieCard from '../MovieCard/MovieCard';
import LoadMoreMoviesButton from '../LoadMoreMoviesButton/LoadMoreMoviesButton';
const TopRatedMovies = (props) => {
  const { topRatedMoviesAction, topRatedMoviesList, isLoading } = props;

  // current page of movie results
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // fetch top rated movies on component mount and when page number changes to load more movies -- pass page number in
    topRatedMoviesAction(currentPage);
  }, [topRatedMoviesAction, currentPage]);

  return (
    <div>
      <div className="display_movies_container">
        <h2 className="display_movies_title">Top Rated Movies</h2>
        <div className="movie_card_container">
          {topRatedMoviesList.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
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
    topRatedMoviesList: state.topRatedMovies.movies,
    isLoading: state.topRatedMovies.isLoading,
    errorMessage: state.topRatedMovies.error || null,
  };
};

const mapDispatchToProps = {
  topRatedMoviesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopRatedMovies);
