import React from 'react';

import TMDBLogo from '../../img/themoviedblogo.svg';

const TopBar = () => {
  return (
    <div class="top_bar_container">
      <span className="app_title">React Movie DB</span>
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
