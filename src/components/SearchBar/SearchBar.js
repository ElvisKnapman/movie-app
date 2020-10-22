import React, { useState } from 'react';
import { IoMdSearch as SearchIcon } from 'react-icons/io';

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState('');
  const [isHover, setIsHover] = useState(false);
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  console.log('search text', searchText);

  return (
    <div className="search_bar_container">
      <div className="search_bar">
        <input
          className="search_bar_input"
          style={isHover ? { width: '50%' } : { width: '1rem' }}
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
    </div>
  );
};

export default SearchBar;
