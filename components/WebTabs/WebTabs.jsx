import { useState } from "react";
import "./WebTabs.css";

export const WebTabs = () => {
	const [webTabActive, setWebTabActive] = useState("home");

	const renderContenido = () => {
		switch (webTabActive) {
			case "home":
				return <p>Bienvenido a la página de inicio.</p>;
			case "profile":
				return <p>Este es tu perfil de usuario.</p>;
			case "settings":
				return <p>Aquí puedes modificar la configuración.</p>;
			default:
				return null;
		}
	};

	return (
		<div className="webtabs-container">
			<div className="buttons">
				<button
					className={webTabActive === "home" ? "activo" : ""}
					onClick={() => setWebTabActive("home")}
				>
					Inicio
				</button>
				<button
					className={webTabActive === "profile" ? "activo" : ""}
					onClick={() => setWebTabActive("profile")}
				>
					Perfil
				</button>
				<button
					className={webTabActive === "settings" ? "activo" : ""}
					onClick={() => setWebTabActive("settings")}
				>
					Ajustes
				</button>
			</div>

			<div className="content">
				{renderContenido()}
			</div>
		</div>
	);
};