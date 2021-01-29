import React, { createContext, useEffect, useState } from "react";

export const MovieListContext = createContext();

const MovieListContextProvider = (props) => {
	const [movieList, setMovieList] = useState([]);

	const addMovie = (movieId) => {
		if (!movieList.includes(movieId)) {
			setMovieList([...movieList, movieId]);
		}
	};

	useEffect(() => {
		localStorage.setItem("movies", JSON.stringify(movieList));
	}, [movieList]);

	return (
		<MovieListContext.Provider value={{ movieList, addMovie }}>
			{props.children}
		</MovieListContext.Provider>
	);
};

export default MovieListContextProvider;
