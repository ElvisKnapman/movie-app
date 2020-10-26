import {
  FETCH_POPULAR_MOVIES_START,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAILURE,
  CREATE_FRESH_MOVIE_ARRAY_ON_MOUNT,
} from '../actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  movies: [],
};

const popularMovies = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FRESH_MOVIE_ARRAY_ON_MOUNT:
      return {
        ...state,
        movies: [],
      };

    case FETCH_POPULAR_MOVIES_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // keep any movies then add more results to the array
        movies: [...state.movies, ...action.payload],
      };

    case FETCH_POPULAR_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default popularMovies;
