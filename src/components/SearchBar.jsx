import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
	const [city, setCity] = useState("");

	return (
		<div className="searchBar">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (city === "") {
						alert("nel");
					}
					onSearch(city);
					setCity("");
				}}
			>
				<input
					type="text"
					placeholder="Search your city..."
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<button type="submit" className="button-name">
					Add city
				</button>
			</form>
		</div>
	);
}
