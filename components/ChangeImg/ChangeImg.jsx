import { useState } from "react";
import "./ChangeImg.css";

export const ChangeImg = () => {
	const [imgOne, setImgOne] = useState(true);

	const toggleImagen = () => {
		setImgOne(!imgOne);
	};

	return (
		<div className="changeimg-container">
			<img
				src={
					imgOne
						? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH3TeeO3kJAP8AxcxwFrozjHziwhK1wI0dbw&s"
						: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGHiI4AuD1VzoZqiNN0xGWVWmmD3a8Glps2Q&s"
				}
				alt="Cambiar imagen"
				className="img"
			/>
			<button onClick={toggleImagen}>Cambiar a {imgOne ? "Imagen 2" : "Imagen 1"}</button>
		</div>
	);
};
