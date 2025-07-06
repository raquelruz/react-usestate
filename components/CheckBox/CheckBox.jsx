import { useState } from "react";
import "./CheckBox.css";

export const CheckBox = () => {
	const [accepted, setAccepted] = useState(false);

	const handleChange = (event) => {
		setAccepted(event.target.checked);
	};

	return (
		<div className="checkbox-container">
			<label>
				<input type="checkbox" checked={accepted} onChange={handleChange} />
				Aceptar términos
			</label>

			<p className={`status ${accepted ? "accepted" : "no-accepted"}`}>
				{accepted ? "Aceptado ✅" : "No aceptado ❌"}
			</p>
		</div>
	);
};
