import { combineReducers } from 'redux';

// reducers
import popularMovies from './popularMovies';
import searchMovies from './searchMovies';

export default combineReducers({
  popularMovies,
  searchMovies,
});
