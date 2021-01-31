import React, { useContext } from "react";
import UserListCard from "./UserListCard";
import notFound from "../img/not-found.png";
import { MovieListContext } from "../contexts/MovieListContext";

const UserList = () => {
	const { movieList } = useContext(MovieListContext);

	return movieList.length === 0 ? (
		<div className="no-movies">
			<img src={notFound} alt="No movies found" />
			<h3>No Movies found. Please add some movies...</h3>
		</div>
	) : (
		<div id="movie-grid">
			{movieList.map((movie) => (
				<UserListCard movie={movie} key={movie.id} />
			))}
		</div>
	);
};

export default UserList;
