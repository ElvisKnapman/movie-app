import {
  SET_VISIBILITY_FILTER_POPULAR,
  SET_VISIBILITY_FILTER_SEARCHED,
  SET_VISIBILITY_FILTER_TOP_RATED,
  SET_VISIBILITY_FILTER_TRENDING,
} from '../actionTypes';

export const showPopularMovies = () => async (dispatch) => {
  dispatch({ type: SET_VISIBILITY_FILTER_POPULAR });
};

export const showTopRatedMovies = () => async (dispatch) => {
  dispatch({ type: SET_VISIBILITY_FILTER_TOP_RATED });
};

export const showTrendingMovies = () => async (dispatch) => {
  dispatch({ type: SET_VISIBILITY_FILTER_TRENDING });
};

export const showSearchedMovies = async (dispatch) => {
  dispatch({ type: SET_VISIBILITY_FILTER_SEARCHED });
};
