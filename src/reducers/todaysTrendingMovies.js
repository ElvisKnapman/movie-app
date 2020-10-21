import {
  FETCH_TODAYS_TRENDING_MOVIES_START,
  FETCH_TODAYS_TRENDING_MOVIES_SUCCESS,
  FETCH_TODAYS_TRENDING_MOVIES_FAILURE,
} from '../actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  movies: [],
};

const todaysTrendingMovies = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODAYS_TRENDING_MOVIES_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case FETCH_TODAYS_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };

    case FETCH_TODAYS_TRENDING_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default todaysTrendingMovies;
