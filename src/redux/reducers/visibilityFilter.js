import {
  SET_VISIBILITY_FILTER_POPULAR,
  SET_VISIBILITY_FILTER_HIGHEST_RATED,
  SET_VISIBILITY_FILTER_TRENDING,
} from '../actionTypes';

const initialState = {
  showPopular: true,
  showHighestRated: false,
  showTrending: false,
};

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER_POPULAR:
      return {
        ...state,
        showPopular: true,
        showHighestRated: false,
        showTrending: false,
      };

    case SET_VISIBILITY_FILTER_HIGHEST_RATED:
      return {
        ...state,
        showPopular: false,
        showHighestRated: true,
        showTrending: false,
      };

    case SET_VISIBILITY_FILTER_TRENDING:
      return {
        ...state,
        showPopular: false,
        showHighestRated: false,
        showTrending: true,
      };

    default:
      return state;
  }
};

export default visibilityFilter;
