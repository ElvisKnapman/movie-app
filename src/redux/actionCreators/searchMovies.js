import axios from 'axios';

import {
  SEARCH_MOVIES_START,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
} from '../actionTypes';

export const searchMovies = (searchString) => async (dispatch) => {
  dispatch({ type: SEARCH_MOVIES_START });

  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=9bf58527f8639b438523290ccf8faf71&language=en-US&page=1&include_adult=false&query=${searchString}`
    );
    console.log('the search results for the movie term', result);
    dispatch({ type: SEARCH_MOVIES_SUCCESS, payload: result.data.results });
  } catch (err) {
    dispatch({
      type: SEARCH_MOVIES_FAILURE,
      payload: 'There was an error with your search.',
    });
  }
};
