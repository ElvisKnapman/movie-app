import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';

// action creator(s)
import { popularMovies } from '../../actionCreators/popularMovies';

// components
import MovieCard from '../MovieCard/MovieCard';

const PopularMovieContainer = (props) => {
  const { popularMovies, popularMoviesList, isLoading } = props;
  useEffect(() => {
    // fetch popular movies on component mount
    popularMovies();
  }, [popularMovies]);

  return (
    <div>
      <div className="popular_movies_container">
        {isLoading ? (
          <p style={{ fontSize: '4rem', color: '#fff' }}>Loading...</p>
        ) : null}
        <h2 className="popular_movies_title">Popular Movies</h2>
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

export default connect(mapStateToProps, { popularMovies })(
  PopularMovieContainer
);
