import React from 'react';

import { connect } from 'react-redux';

// components
import SearchBar from '../SearchBar/SearchBar';
import PopularMovies from '../DisplayMovies/PopularMovies';
import TopRatedMovies from '../DisplayMovies/TopRatedMovies';
import TrendingMovies from '../DisplayMovies/TrendingMovies';
import SearchedMovies from '../DisplayMovies/SearchedMovies';
import ComponentContainer from '../ComponentContainer/ComponentContainer';

const HomePage = (props) => {
  return (
    <div className="inner_page_container">
      <ComponentContainer>
        <SearchBar />
      </ComponentContainer>
      {props.showPopular && (
        <ComponentContainer>
          <PopularMovies />
        </ComponentContainer>
      )}
      {props.showTopRated && (
        <ComponentContainer>
          <TopRatedMovies />
        </ComponentContainer>
      )}
      {props.showTrending && (
        <ComponentContainer>
          <TrendingMovies />
        </ComponentContainer>
      )}
      {props.showSearched && (
        <ComponentContainer>
          <SearchedMovies />
        </ComponentContainer>
      )}{' '}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showPopular: state.visibilityFilter.showPopular,
    showTopRated: state.visibilityFilter.showTopRated,
    showTrending: state.visibilityFilter.showTrending,
    showSearched: state.visibilityFilter.showSearched,
  };
};

export default connect(mapStateToProps, null)(HomePage);
