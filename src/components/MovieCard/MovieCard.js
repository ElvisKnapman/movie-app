import React from 'react';
import { Link } from 'react-router-dom';

// placeholder image for no poster
import NoPoster from '../../img/poster_placeholder.png';

const MovieCard = ({ movie }) => {
  // does the movie have a poster image?
  const hasPoster = movie.poster_path ? true : false;
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
