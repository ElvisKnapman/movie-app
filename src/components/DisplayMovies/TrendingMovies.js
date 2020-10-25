import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// action creator(s)
import { trendingMovies as trendingMoviesAction } from '../../redux/actionCreators/trendingMovies';

// components
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import MovieCard from '../MovieCard/MovieCard';

const TrendingMovies = (props) => {
  const { trendingMoviesAction, trendingMoviesList, isLoading } = props;
  useEffect(() => {
    // fetch trending movies on component mount
    trendingMoviesAction();
  }, [trendingMoviesAction]);

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
        <h2 className="display_movies_title">Today's Trending Movies</h2>
        <div className="movie_card_container">
          {trendingMoviesList.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    trendingMoviesList: state.trendingMovies.movies,
    isLoading: state.trendingMovies.isLoading,
    errorMessage: state.trendingMovies.error || null,
  };
};

const mapDispatchToProps = {
  trendingMoviesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingMovies);
