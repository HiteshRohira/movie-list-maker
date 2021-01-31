import React, { useState } from "react";
import SearchGrid from "./SearchGrid";

const Search = () => {
	const [searchText, setSearchText] = useState("");

	const handleChange = (e) => {
		e.preventDefault();
		setSearchText(e.target.value);
	};

	return (
		<div className="search">
			<input
				type="text"
				name="Search"
				id="search-box"
				onChange={handleChange}
				value={searchText}
			/>
			{searchText && <SearchGrid searchText={searchText} />}
		</div>
	);
};

export default Search;
