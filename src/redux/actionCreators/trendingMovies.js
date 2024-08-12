import axios from 'axios';

import {
	FETCH_TRENDING_MOVIES_START,
	FETCH_TRENDING_MOVIES_SUCCESS,
	FETCH_TRENDING_MOVIES_FAILURE,
} from '../actionTypes';

export const trendingMovies = () => async dispatch => {
	dispatch({ type: FETCH_TRENDING_MOVIES_START });

	try {
		const result = await axios.get(
			'https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}'
		);
		const movies = result.data.results;
		dispatch({ type: FETCH_TRENDING_MOVIES_SUCCESS, payload: movies });
	} catch (err) {
		dispatch({
			type: FETCH_TRENDING_MOVIES_FAILURE,
			payload: 'There was an error retrieving trending movies.',
		});
	}
};
