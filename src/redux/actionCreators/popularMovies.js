import axios from 'axios';

import {
  FETCH_POPULAR_MOVIES_START,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAILURE,
} from '../actionTypes';

export const popularMovies = () => async (dispatch) => {
  dispatch({ type: FETCH_POPULAR_MOVIES_START });

  try {
    const result = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=9bf58527f8639b438523290ccf8faf71'
    );
    // array of movies is nested in object (in data.results)
    setTimeout(() => {
      dispatch({
        type: FETCH_POPULAR_MOVIES_SUCCESS,
        payload: result.data.results,
      });
    }, 1000);
  } catch (error) {
    dispatch({
      type: FETCH_POPULAR_MOVIES_FAILURE,
      payload: 'There was an error fetching the movies. Please try again.',
    });
  }
};
