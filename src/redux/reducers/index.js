import { combineReducers } from 'redux';

// reducers
import popularMovies from './popularMovies';
import topRatedMovies from './topRatedMovies';
import trendingMovies from './trendingMovies';
import searchMovies from './searchMovies';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  visibilityFilter,
  popularMovies,
  topRatedMovies,
  trendingMovies,
  searchMovies,
});
