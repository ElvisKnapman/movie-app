import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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
  // const [popularMoviesList, setPopularMoviesList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getMovies = async () => {
  //     // set is loading true
  //     setIsLoading(true);
  //     try {
  //       const result = await axios.get(
  //         `https://api.themoviedb.org/3/movie/popular?api_key=9bf58527f8639b438523290ccf8faf71&page=${currentPage}`
  //       );

  //       const movies = result.data.results;
  //       setPopularMoviesList([...popularMoviesList, ...movies]);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //     // done action
  //     setIsLoading(false);
  //   };
  //   getMovies();
  // }, [currentPage]);

  console.log('the movies', popularMoviesList);
  useEffect(() => {
    // fetch popular movies on component mount and when page number changes to load more movies -- pass page number in
    popularMoviesAction(currentPage);
    console.log('rendered component');
  }, [currentPage]);

  // if (isLoading) {
  //   return (
  //     <div>
  //       <LoadingSpinner />
  //     </div>
  //   );
  // }

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
          // show button if not currently loading
          !isLoading ? (
            <LoadMoreMoviesButton
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : null
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
};
// export default PopularMovies;
export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies);
