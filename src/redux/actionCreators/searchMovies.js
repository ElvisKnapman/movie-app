import axios from 'axios';

import {
	SEARCH_MOVIES_START,
	SEARCH_MOVIES_SUCCESS,
	SEARCH_MOVIES_FAILURE,
	SET_VISIBILITY_FILTER_SEARCHED,
} from '../actionTypes';

export const searchMovies = searchString => async dispatch => {
	dispatch({ type: SEARCH_MOVIES_START });

	try {
		const result = await axios.get(
			`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&page=1&include_adult=false&query=${searchString}`
		);
		const movies = result.data.results;
		await dispatch({
			type: SEARCH_MOVIES_SUCCESS,
			payload: movies,
		});
		// set the visibility to show the searched results
		dispatch({ type: SET_VISIBILITY_FILTER_SEARCHED });
	} catch (err) {
		dispatch({
			type: SEARCH_MOVIES_FAILURE,
			payload: 'There was an error with your search.',
		});
	}
};
