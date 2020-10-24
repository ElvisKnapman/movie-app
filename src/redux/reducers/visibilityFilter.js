import {
  SET_VISIBILITY_FILTER_POPULAR,
  SET_VISIBILITY_FILTER_TOP_RATED,
  SET_VISIBILITY_FILTER_TRENDING,
  SET_VISIBILITY_FILTER_SEARCHED,
} from '../actionTypes';

const initialState = {
  showPopular: true,
  showTopRated: false,
  showTrending: false,
  showSearched: false,
};

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER_SEARCHED:
      return {
        ...state,
        showPopular: false,
        showTopRated: false,
        showTrending: false,
        showSearched: true,
      };
    case SET_VISIBILITY_FILTER_POPULAR:
      return {
        ...state,
        showPopular: true,
        showTopRated: false,
        showTrending: false,
        showSearched: false,
      };

    case SET_VISIBILITY_FILTER_TOP_RATED:
      return {
        ...state,
        showPopular: false,
        showTopRated: true,
        showTrending: false,
        showSearched: false,
      };

    case SET_VISIBILITY_FILTER_TRENDING:
      return {
        ...state,
        showPopular: false,
        showTopRated: false,
        showTrending: true,
        showSearched: false,
      };

    default:
      return state;
  }
};

export default visibilityFilter;
