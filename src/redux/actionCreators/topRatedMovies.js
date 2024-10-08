import axios from 'axios';

import {
	FETCH_TOP_RATED_MOVIES_START,
	FETCH_TOP_RATED_MOVIES_SUCCESS,
	FETCH_TOP_RATED_MOVIES_FAILURE,
} from '../actionTypes';

export const topRatedMovies = pageNumber => async dispatch => {
	dispatch({ type: FETCH_TOP_RATED_MOVIES_START });

	try {
		const result = await axios.get(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNumber}`
		);
		const movies = result.data.results;
		// send the movies to the reducer if successful
		dispatch({ type: FETCH_TOP_RATED_MOVIES_SUCCESS, payload: movies });
	} catch (err) {
		dispatch({
			type: FETCH_TOP_RATED_MOVIES_FAILURE,
			payload: 'There was an error retrieving the top rated movies.',
		});
	}
};
