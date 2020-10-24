import {
  FETCH_TRENDING_MOVIES_START,
  FETCH_TRENDING_MOVIES_SUCCESS,
  FETCH_TRENDING_MOVIES_FAILURE,
} from '../actionTypes';

const initialState = {
  isLoading: false,
  movies: [],
  error: '',
};

const trendingMovies = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRENDING_MOVIES_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };

    case FETCH_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };

    case FETCH_TRENDING_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default trendingMovies;
