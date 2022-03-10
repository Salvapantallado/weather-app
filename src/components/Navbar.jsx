import React from "react";

import SearchBar from "./SearchBar.jsx";
import Time from "./Time.jsx";

export default function Navbar({ onSearch }) {
	return (
		<div className="nav-wrapper">
			<Time />
			<div className="navbar">
				<h1>Weather app</h1>
				<SearchBar onSearch={onSearch} />
			</div>
		</div>
	);
}
