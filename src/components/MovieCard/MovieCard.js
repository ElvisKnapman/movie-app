import React from 'react';
import { Link } from 'react-router-dom';

// placeholder image for no poster
import NoPoster from '../../img/poster_placeholder.png';

const MovieCard = ({ movie }) => {
	return (
		<Link to={`/movies/${movie.id}`}>
			<div>
				<img
					className="movie_card_poster"
					src={
						movie.poster.path
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
