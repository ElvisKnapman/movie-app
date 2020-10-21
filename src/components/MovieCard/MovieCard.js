import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie_card">
      <h1 style={{ fontSize: '2rem' }}>Movie Card</h1>
      <p style={{ fontSize: '1.5rem' }}>{movie.title}</p>
    </div>
  );
};

export default MovieCard;
