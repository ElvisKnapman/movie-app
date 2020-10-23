import {
  SET_VISIBILITY_FILTER_POPULAR,
  SET_VISIBILITY_FILTER_HIGHEST_RATED,
  SET_VISIBILITY_FILTER_TRENDING,
} from '../actionTypes';

export const showPopularMovies = () => async (dispatch) => {
  dispatch({ type: SET_VISIBILITY_FILTER_POPULAR });
};

export const showHighestRatedMovies = () => async (dispatch) => {
  dispatch({ type: SET_VISIBILITY_FILTER_HIGHEST_RATED });
};

export const showTrendingMovies = () => async (dispatch) => {
  dispatch({ type: SET_VISIBILITY_FILTER_TRENDING });
};
