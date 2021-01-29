import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const UserList = () => {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const localMovies = localStorage.getItem("movies")
		? JSON.parse(localStorage.getItem("movies"))
		: [];

	useEffect(() => {
		const fetchMovies = async () => {
			for (let movie of localMovies) {
				const result = await axios(
					`https://api.themoviedb.org/3/movie/${movie}?api_key=4b729af6988177029d56cd7cc8ecfabe`
				);
				// console.log(result.data);
				setMovies(...movies, result.data.results);
			}
			setIsLoading(false);
		};

		fetchMovies();
	}, [movies]);

	if (localMovies === []) {
		return <p>No Movies found</p>;
	}

	return localMovies === [] ? (
		<p>No Movies added</p>
	) : (
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

export default UserList;
