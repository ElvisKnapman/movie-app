import axios from 'axios';

import {
  FETCH_TODAYS_TRENDING_MOVIES_START,
  FETCH_TODAYS_TRENDING_MOVIES_SUCCESS,
  FETCH_TODAYS_TRENDING_MOVIES_FAILURE,
} from '../actionTypes';

export const todaysTrendingMovies = () => async (dispatch) => {
  dispatch({ type: FETCH_TODAYS_TRENDING_MOVIES_START });

  try {
    const result = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=9bf58527f8639b438523290ccf8faf71'
    );
    console.log('the results:', result.data.results);
    // array of movies is nested in object (in data.results)
    dispatch({
      type: FETCH_TODAYS_TRENDING_MOVIES_SUCCESS,
      payload: result.data.results,
    });
  } catch (error) {
    dispatch({
      type: FETCH_TODAYS_TRENDING_MOVIES_FAILURE,
      payload: 'There was an error fetching the movies. Please try again.',
    });
  }
};
