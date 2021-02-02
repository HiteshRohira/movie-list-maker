import React, { useContext, useState } from "react";
import { MovieListContext } from "../contexts/MovieListContext";
import MovieDetailsModal from "./MovieDetailsModal";

const MovieCard = ({ movie }) => {
	const { addMovie } = useContext(MovieListContext);

	const [isOpen, setIsOpen] = useState(false);

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div id="movie-card">
			<img
				src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
				alt="movie poster"
				onClick={() => {
					setIsOpen(true);
				}}
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
			{isOpen && (
				<div className="modal-bg" onClick={closeModal}>
					<MovieDetailsModal movie={movie} />

					<button className="modal-close" onClick={closeModal}>
						<i className="fas fa-times close"></i>
					</button>
				</div>
			)}
		</div>
	);
};

export default MovieCard;
