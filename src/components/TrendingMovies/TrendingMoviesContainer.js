import React from 'react';
import { connect } from 'react-redux';

// action creator(s)
import { todaysTrendingMovies } from '../../actionCreators/todaysTrendingMovies';

// components
import MovieCard from '../MovieCard/MovieCard';

const TrendingMovieContainer = (props) => {
  return (
    <div>
      <h1>React Trending Movies Container</h1>
      <button onClick={props.todaysTrendingMovies}>
        Click to get the trending movies
      </button>
      {props.isLoading ? <p>Loading...</p> : null}
      <div className="trending_movies_container">
        {props.trendingMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    trendingMovies: state.todaysTrendingMovies.movies,
    isLoading: state.todaysTrendingMovies.isLoading,
    errorMessage: state.todaysTrendingMovies.error || null,
  };
};

export default connect(mapStateToProps, { todaysTrendingMovies })(
  TrendingMovieContainer
);
