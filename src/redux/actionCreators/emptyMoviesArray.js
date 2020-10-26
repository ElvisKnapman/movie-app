import { CREATE_FRESH_MOVIE_ARRAY_ON_MOUNT } from '../actionTypes';

export const emptyMoviesArray = () => (dispatch) => {
  dispatch({ type: CREATE_FRESH_MOVIE_ARRAY_ON_MOUNT });
};
