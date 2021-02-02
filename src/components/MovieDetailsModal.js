import React from "react";

const MovieDetailsModal = ({ movie }) => {
	return (
		<div className="modal">
			<img
				src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
				alt="movie poster"
				className="modal-img"
			/>
			<div className="free">
				<h3>{movie.title}</h3>
				<p>{movie.overview}</p>
				<p>
					<strong>Release: </strong>
					{movie.release_date}
				</p>
				<p>
					<strong>Rating: </strong>
					{movie.vote_average}
				</p>
			</div>
		</div>
	);
};

export default MovieDetailsModal;
