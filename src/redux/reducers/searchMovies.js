import {
  SEARCH_MOVIES_START,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
} from '../actionTypes';

const initialState = {
  isLoading: false,
  movies: [],
  errorMessage: '',
};

const searchMovies = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };

    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };

    case SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default searchMovies;
