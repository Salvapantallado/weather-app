import React from "react";
import Card from "./Card";

export default function CardsInfo({ cities, onClose }) {
	if (cities) {
		return (
			<div className="spacing">
				{cities
					? cities.map((city, index) => (
							<Card
								max={city.max}
								min={city.min}
								img={city.img}
								name={city.name}
								onClose={() => onClose(city.id)}
								weather={city.weather}
								wind={city.wind}
								clouds={city.clouds}
								latitud={city.latitud}
								longitud={city.longitud}
								time={city.time}
								key={index}
							/>
					  ))
					: null}
			</div>
		);
	}
	if (cities.length === 0) {
		return <div>Sin ciudades</div>;
	} else {
		return;
	}
}
