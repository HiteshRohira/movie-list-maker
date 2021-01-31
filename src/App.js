import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import PopularMovieGrid from "./components/PopularMovieGrid";
import TopRatedMovieGrid from "./components/TopRatedMovieGrid";
import MovieListContextProvider from "./contexts/MovieListContext";
import UserList from "./components/UserList";
import Search from "./components/Search";

const App = () => {
	return (
		<Router>
			<div className="App">
				<MovieListContextProvider>
					<Header />
					<Switch>
						<Route exact path="/">
							<PopularMovieGrid />
						</Route>
						<Route exact path="/top-rated">
							<TopRatedMovieGrid />
						</Route>
						<Route exact path="/user-list">
							<UserList />
						</Route>
						<Route exact path="/search">
							<Search />
						</Route>
					</Switch>
				</MovieListContextProvider>
			</div>
		</Router>
	);
};

export default App;
