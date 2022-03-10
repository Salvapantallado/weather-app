import React from "react";

export default function Card(props) {
	return (
		<div>
			<div className="cards-container">
				<div className="close">
					<button onClick={props.onClose}>X</button>
				</div>
				<div>
					{Card ? (
						<div className="cards-content">
							<h2>{props.name}</h2>
							<div>
								<p>Min: {props.min}°</p>
							</div>
							<div>
								<p>Max: {props.max}°</p>
							</div>
							<div>
								<p>Wind: {props.wind}mph</p>
							</div>
							<div>
								<p>Weather: {props.weather}</p>
							</div>
						</div>
					) : (
						<div>
							<p>Eliminate una ciudad prro</p>
						</div>
					)}

					<img
						src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
						alt="Clima"
					/>
				</div>
			</div>
		</div>
	);
}
