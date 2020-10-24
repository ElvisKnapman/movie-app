import React, { useState, useEffect } from 'react';
import { IoMdSearch as SearchIcon } from 'react-icons/io';

import { connect } from 'react-redux';

// action creators
import { searchMovies as searchMoviesAction } from '../../redux/actionCreators/searchMovies';
// visibility filters actions
import {
  showPopularMovies,
  showTopRatedMovies,
  showTrendingMovies,
  showSearchedMovies,
} from '../../redux/actionCreators/visibilityFilter';

const SearchBar = (props) => {
  // destructure state from store
  const {
    searchMoviesAction,
    showSearchedMovies,
    showPopular,
    showTopRated,
    showTrending,
  } = props;
  const [searchText, setSearchText] = useState('');
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    // prevents action from firing on component mount... must have text in search box
    if (searchText !== '') {
      // trim leading and trailing whitespace and URI encode the string for the API query
      const encodedString = encodeURI(searchText);
      console.log('in the useEffect', encodedString);
      console.log('search bar props', props);
      // dispatch action to fetch movies based on search string
      searchMoviesAction(encodedString);
    }
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  console.log('search text', searchText);
  console.log('props', true);

  return (
    <div className="search_bar_container">
      <div className="search_bar">
        <input
          className="search_bar_input"
          name="movie_name"
          type="text"
          onChange={handleChange}
          value={searchText}
          placeholder="Search Movies..."
        />
        <SearchIcon
          onClick={() => setIsHover(!isHover)}
          className="search_icon"
        />
      </div>
      <div className="filter_container">
        <div className="filter_option_container">
          <span
            className={`filter_option ${showPopular ? 'active' : ''}`}
            onClick={props.showPopularMovies}>
            Popular
          </span>
        </div>
        <div className="filter_option_container">
          <span
            className={`filter_option ${showTopRated ? 'active' : ''}`}
            onClick={props.showTopRatedMovies}>
            Top Rated
          </span>
        </div>
        <div className="filter_option_container">
          <span
            className={`filter_option ${showTrending ? 'active' : ''}`}
            onClick={props.showTrendingMovies}>
            Trending
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showPopular: state.visibilityFilter.showPopular,
    showTopRated: state.visibilityFilter.showTopRated,
    showTrending: state.visibilityFilter.showTrending,
  };
};

const mapDispatchToProps = {
  showSearchedMovies,
  showPopularMovies,
  showTopRatedMovies,
  showTrendingMovies,
  searchMoviesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
