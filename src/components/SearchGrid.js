import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const SearchGrid = ({ searchText }) => {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchMovies = async () => {
			const result = await axios(
				`https://api.themoviedb.org/3/search/movie?api_key=4b729af6988177029d56cd7cc8ecfabe&query=${searchText}`
			);
			setIsLoading(false);
			setMovies(result.data.results);
		};

		fetchMovies();
	}, [searchText]);

	return (
		<div id="movie-grid">
			{isLoading ? (
				<div id="loading">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			) : (
				movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
			)}
		</div>
	);
};

export default SearchGrid;
