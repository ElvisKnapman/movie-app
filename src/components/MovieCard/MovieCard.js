import React from 'react';
import { Link } from 'react-router-dom';

// placeholder image for no poster
import NoPoster from '../../img/poster_placeholder.png';

const MovieCard = ({ movie }) => {
  // get movie poster to display or display placeholder
  const hasPoster = movie.poster_path ? true : false;
  // const pathPrefix = "http://image.tmdb.org/t/p/w500/";
  // const posterPath = movie.poster.path ? movie.poster.path : {NoPoster};
  return (
    <Link to={`/movies/${movie.id}`}>
      <div>
        <img
          className="movie_card_poster"
          src={
            hasPoster
              ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : `${NoPoster}`
          }
          alt={`Poster for the movie ${movie.title}`}
        />
      </div>
    </Link>
  );
};

export default MovieCard;
