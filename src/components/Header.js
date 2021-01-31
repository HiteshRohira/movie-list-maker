import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

const Header = () => {
	return (
		<header>
			<span className="title">
				<img src={logo} alt="Logo" id="logo" />
				<h2>Movie List Maker</h2>
			</span>
			<ul className="nav-links">
				<li>
					<Link to="/">Popular</Link>
				</li>
				<li>
					<Link to="/top-rated">Top Rated</Link>
				</li>
				<li>
					<Link to="/user-list">My List</Link>
				</li>
				<li>
					<Link to="/search">
						<i className="fas fa-search"></i>
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
