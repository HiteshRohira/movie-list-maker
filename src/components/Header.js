import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

const Header = () => {
	const openMenu = () => {
		const navbar = document.querySelector("#nav");
		navbar.classList.toggle("show");
	};

	const closeMenu = () => {
		const navbar = document.querySelector("#nav");
		navbar.classList.remove("show");
	};

	return (
		<header>
			<span className="title">
				<img src={logo} alt="Logo" id="logo" />
				<h2>Movie Lister</h2>
			</span>
			<button className="menu-btn" onClick={openMenu}>
				<i className="fas fa-bars menu"></i>
			</button>
			<nav id="nav">
				<ul className="nav-links">
					<li onClick={closeMenu}>
						<Link to="/">Popular</Link>
					</li>
					<li onClick={closeMenu}>
						<Link to="/top-rated">Top Rated</Link>
					</li>
					<li onClick={closeMenu}>
						<Link to="/user-list">My List</Link>
					</li>
					<li onClick={closeMenu}>
						<Link to="/search">
							<i className="fas fa-search"></i>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
