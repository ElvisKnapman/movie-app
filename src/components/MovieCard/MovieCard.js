import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie_card">
      <img
        className="movie_card_poster"
        src={`http://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
        alt={`Poster for the movie ${movie.title}`}
      />
    </div>
  );
};

export default MovieCard;
