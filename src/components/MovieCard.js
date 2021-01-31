import React, { useContext } from "react";
import { MovieListContext } from "../contexts/MovieListContext";

const MovieCard = ({ movie }) => {
	const { addMovie } = useContext(MovieListContext);
	return (
		<div id="movie-card">
			<img
				src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
				alt="movie poster"
			/>
			<div className="movie-details">
				<h4>{movie.title}</h4>
				<div className="card-container">
					<span>
						<i className="fas fa-star"></i>
						{` ${movie.vote_average}`}
					</span>
					<button
						onClick={() => {
							addMovie(movie);
						}}
						className="add-btn">
						<i className="fas fa-plus"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
