import React, { useEffect, useState } from 'react';

import axios from 'axios';

export default function TestMoviePage({ match }) {
  const id = Number(match.params.id);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=9bf58527f8639b438523290ccf8faf71`
      )
      .then((res) => setMovie(res.data));
  });
  console.log('match', match);

  if (!movie) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        background: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        height: '100vh',
      }}>
      <h1>Test Movie Page</h1>
    </div>
  );
}
