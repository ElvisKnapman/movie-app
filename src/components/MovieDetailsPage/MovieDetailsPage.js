import React, { useEffect, useState } from 'react';

import axios from 'axios';

import NoPoster from '../../img/poster_placeholder.png';
// components
import ComponentContainer from '../ComponentContainer/ComponentContainer';

export default function TestMoviePage({ match }) {
  const id = Number(match.params.id);
  const [movie, setMovie] = useState(null);
  const [movieCast, setMovieCast] = useState(null);
  const [director, setDirector] = useState(null);
  const [movieYear, setMovieYear] = useState(null);
  const [hasPoster, setHasPoster] = useState(false);

  // get the movie by the id in the url params
  useEffect(() => {
    const getMovie = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=9bf58527f8639b438523290ccf8faf71`
        )
        .then((res) => setMovie(res.data));
    };
    getMovie();
  }, []);
  console.log('match', match);

  // get the cast by the movie, using the movie id in the url params
  useEffect(() => {
    const getCast = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9bf58527f8639b438523290ccf8faf71`
        )
        .then((res) => setMovieCast(res.data));
    };
    getCast();
  }, []);

  useEffect(() => {
    if (movieCast) {
      findDirector();
    }
  }, [movieCast]);

  useEffect(() => {
    // attempt to set state, only if the movie has been retrieved
    if (movie) {
      setMovieYear(movie.release_date.split('-')[0]);
      // does the movie have a poster image?
      setHasPoster(movie.poster_path ? true : false);
    }
  }, [movie]);

  // get director from the cast and crew object
  const findDirector = () => {
    const list = movieCast.crew.filter((person) => {
      return person.job === 'Director';
    });
    // destructure out of array
    const [director] = list;
    console.log('the director', director);
    setDirector(director.name);
  };

  // if there is a movie object
  if (movie) {
    // divide movie release date up at the hyphens and get the year in the first position
    console.log('movie object', movie);
    console.log('movie year', movieYear);
  }

  if (movieCast) {
    console.log('the cast', movieCast);
  }

  if (!movie) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <div
      className="movie_details_container"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.6) 20%, rgba(0,0,0,.05)), url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
      }}>
      <div className="movie_details_content_box">
        <div className="movie_details_flex_content_container">
          <div className="movie_details_flex_content_left">
            <h1 className="movie_details_title">{movie.title}</h1>
            <span className="movie_details_year">({movieYear})</span>
            {
              // only show tagline if movie object contains it
              movie.tagline && (
                <div className="movie_details_tagline">
                  <em>"{movie.tagline}"</em>
                </div>
              )
            }
            <div className="movie_details_grid_container">
              <div className="movie_details_genres">
                <div className="movie_details_badge">genres</div>
                <p className="movie_details_text">
                  {movie.genres.map((genre, index) => {
                    // only put a separating dot if it's not the last genre in the list
                    return index === movie.genres.length - 1
                      ? genre.name
                      : genre.name + ', ';
                  })}
                </p>
              </div>
              <div className="movie_details_plot">
                <div className="movie_details_badge">plot</div>
                <p className="movie_details_text">{movie.overview}</p>
              </div>
              <div className="movie_details_director">
                <div className="movie_details_badge">director</div>
                <p className="movie_details_text">{director}</p>
              </div>
              <div className="movie_details_runtime">
                <div className="movie_details_badge">runtime</div>
                <p className="movie_details_text">{movie.runtime} minutes</p>
              </div>
              <div className="movie_details_starring">
                <div className="movie_details_badge">starring</div>
              </div>
            </div>
          </div>
          <div className="movie_details_flex_content_right">
            <img
              style={{ borderRadius: '4px' }}
              src={
                hasPoster
                  ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : `${NoPoster}`
              }
              alt={`Poster for the movie ${movie.title}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
