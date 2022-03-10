import React, { useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import { apiKey, apiUrl } from "./constants.js";

import "./styles/main.css";
import "./styles/Card.css";
import "./styles/Cards.css";
import "./styles/Navbar.css";
import "./styles/SearchBar.css";

function App() {
	const [cities, setCities] = useState([]);

	function onClose(id) {
		setCities((oldCities) => oldCities.filter((c) => c.id !== id));
	}
	function onSearch(ciudad) {
		fetch(`${apiUrl}/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
			.then((r) => r.json())
			.then((recurso) => {
				if (recurso.main !== undefined) {
					const new_city = {
						min: Math.round(recurso.main.temp_min),
						max: Math.round(recurso.main.temp_max),
						img: recurso.weather[0].icon,
						id: recurso.id,
						wind: recurso.wind.speed,
						temp: recurso.main.temp,
						name: recurso.name,
						weather: recurso.weather[0].main,
					};
					setCities((oldCities) => [...oldCities, new_city]);
				} else {
					alert("City not found");
				}
			});
		return;
	}

	return (
		<div className="App">
			<Navbar onSearch={onSearch} />
			<Cards cities={cities} onClose={onClose} />
		</div>
	);
}

export default App;
