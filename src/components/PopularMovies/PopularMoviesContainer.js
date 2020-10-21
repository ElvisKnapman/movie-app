import React, { useEffect } from 'react';
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
  }, []);

  return (
    <div>
      <h1>React Trending Movies Container</h1>
      <button onClick={props.popularMovies}>
        Click to get the trending movies
      </button>
      {props.isLoading ? <p>Loading...</p> : null}
      <div className="trending_movies_container">
        <h2>Today's Trending Movies</h2>
        <div className="movie_card_container">
          {props.popularMoviesList.map((movie) => (
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
