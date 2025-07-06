import { useReducer, useState } from "react";
import "./EditText.css";

export const EditText = () => {
	const [edit, setEdit] = useState(false);
	const [text, setText] = useState("Haz clic para editar");

	return (
		<div className="edittext-container">
			{edit ? (
				<input
					type="text"
					value={text}
					onChange={(element) => setText(element.target.value)}
					onBlur={() => setEdit(false)}
					autoFocus
				/>
			) : (
				<h2 onClick={() => setEdit(true)}>{text}</h2>
			)}
		</div>
	);
};
