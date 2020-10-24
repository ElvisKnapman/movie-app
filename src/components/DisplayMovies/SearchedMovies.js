import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// action creator(s)
// import { searchMovies as searchMoviesAction } from '../../redux/actionCreators/searchMovies';

// components
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import MovieCard from '../MovieCard/MovieCard';

const SearchedMovies = (props) => {
  const { searchedMoviesList, isLoading } = props;
  // useEffect(() => {
  //   // fetch movies based on on component mount
  //   topRatedMoviesAction();
  // }, [topRatedMoviesAction]);

  console.log('top rated movies', searchedMoviesList);

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
        <h2 className="display_movies_title">Your Search Results</h2>
        <div className="movie_card_container">
          {searchedMoviesList.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchedMoviesList: state.searchMovies.movies,
    isLoading: state.searchMovies.isLoading,
    errorMessage: state.searchMovies.error || null,
  };
};

// const mapDispatchToProps = {
//   searchMoviesAction,
// };

export default connect(mapStateToProps, null)(SearchedMovies);
