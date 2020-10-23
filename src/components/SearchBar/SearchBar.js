import React, { useState, useEffect } from 'react';
import { IoMdSearch as SearchIcon } from 'react-icons/io';

import { connect } from 'react-redux';

import { searchMovies } from '../../redux/actionCreators/searchMovies';

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState('');
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    // prevents action from firing on component mount... must have text in search box
    if (searchText !== '') {
      // trim leading and trailing whitespace and URI encode the string for the API query
      const encodedString = encodeURI(searchText);
      console.log('in the useEffect', encodedString);
      console.log('search bar props', props);
      props.searchMovies(encodedString);
    }
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  console.log('search text', searchText);

  return (
    <div className="search_bar_container">
      <div className="search_bar">
        <input
          className="search_bar_input"
          style={isHover ? { width: '100%' } : { width: '1rem' }}
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
          <span className="filter_option">Popular</span>
        </div>
        <div className="filter_option_container">
          <span className="filter_option">Highest Rated</span>
        </div>
        <div className="filter_option_container">
          <span className="filter_option">Trending</span>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { searchMovies })(SearchBar);
