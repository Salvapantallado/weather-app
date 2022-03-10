import React, { useEffect, useState } from "react";

import "../styles/Time.css";

export default function Time() {
	const [time, setTime] = useState(0);
	function clock() {
		return (
			<div className="local-clock">
				<h1> {new Date().toLocaleTimeString()}</h1>
			</div>
		);
	}

	useEffect(() => {
		setInterval(() => {
			setTime(clock());
		}, 1000);
	}, []);

	return (
		<div className="time">
			<h1>Local time: {time}</h1>
		</div>
	);
}
