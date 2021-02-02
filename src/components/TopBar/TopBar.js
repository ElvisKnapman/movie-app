import React from 'react';
import { Link } from 'react-router-dom';

import TMDBLogo from '../../img/themoviedblogo.svg';

const TopBar = () => {
  return (
    <div className="top_bar_container">
      <span className="app_title">
        <Link to="/">React Movie DB</Link>
      </span>
      <div className="powered_by_container">
        <span>Powered By</span>
        <img
          src={TMDBLogo}
          className="tmdb_logo"
          alt="Logo for the movie database"
        />
      </div>
    </div>
  );
};

export default TopBar;
