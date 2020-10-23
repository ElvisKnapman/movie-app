import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';

// action creator(s)
import { popularMovies } from '../../redux/actionCreators/popularMovies';

// components
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import MovieCard from '../MovieCard/MovieCard';

const PopularMovies = (props) => {
  const { popularMovies, popularMoviesList, isLoading } = props;
  useEffect(() => {
    // fetch popular movies on component mount
    popularMovies();
  }, [popularMovies]);

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

export default connect(mapStateToProps, { popularMovies })(PopularMovies);
