import { useState } from "react";
import "./TextBox.css";

export const TextBox = () => {
	const [text, setText] = useState("");

	return (
		<div className="textbox-container">
			<h3>Escribe algo:</h3>
			<input
				type="text"
				value={text}
				onChange={(element) => setText(element.target.value)}
				placeholder="Tu texto aquí"
			/>
			<p className="result-text">Has escrito: <strong>{text}</strong></p>
		</div>
	);
};
