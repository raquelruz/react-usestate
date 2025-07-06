import { useState } from "react";
import "./ChangeColor.css";

export const ChangeColor = () => {
	const [clearMode, setClearMode] = useState(true);

	const toggleColor = () => {
		setClearMode(!clearMode);
	};

	return (
		<div className={`changecolor-container ${clearMode ? "claro" : "oscuro"}`}>
			<h3>Fondo {clearMode ? "Claro ☀️" : "Oscuro 🌙"}</h3>
			<button onClick={toggleColor}>
				Cambiar a {clearMode ? "Oscuro" : "Claro"}
			</button>
		</div>
	);
};