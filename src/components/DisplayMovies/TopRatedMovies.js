import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// action creator(s)
import { topRatedMovies as topRatedMoviesAction } from '../../redux/actionCreators/topRatedMovies';

// components
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import MovieCard from '../MovieCard/MovieCard';

const TopRatedMovies = (props) => {
  const { topRatedMoviesAction, topRatedMoviesList, isLoading } = props;
  useEffect(() => {
    // fetch top rated movies on component mount
    topRatedMoviesAction();
  }, [topRatedMoviesAction]);

  console.log('top rated movies', topRatedMoviesList);

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
        <h2 className="display_movies_title">Top Rated Movies</h2>
        <div className="movie_card_container">
          {topRatedMoviesList.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
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
