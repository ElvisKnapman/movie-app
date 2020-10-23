import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div>
        <img
          className="movie_card_poster"
          src={`http://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
          alt={`Poster for the movie ${movie.title}`}
        />
      </div>
    </Link>
  );
};

export default MovieCard;
