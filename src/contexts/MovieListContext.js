import React, { createContext, useEffect, useState } from "react";

export const MovieListContext = createContext();

const MovieListContextProvider = (props) => {
	const localMovies = localStorage.getItem("movies")
		? JSON.parse(localStorage.getItem("movies"))
		: [];
	const [movieList, setMovieList] = useState(localMovies);

	const addMovie = (movie) => {
		if (!movieList.includes(movie)) {
			setMovieList([...movieList, movie]);
		}
	};

	const removeMovie = (movieId) => {
		setMovieList(movieList.filter((movie) => movie.id !== movieId));
	};

	useEffect(() => {
		localStorage.setItem("movies", JSON.stringify(movieList));
	}, [movieList]);

	return (
		<MovieListContext.Provider value={{ movieList, addMovie, removeMovie }}>
			{props.children}
		</MovieListContext.Provider>
	);
};

export default MovieListContextProvider;
