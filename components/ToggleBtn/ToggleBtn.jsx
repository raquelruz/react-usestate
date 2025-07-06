import { useState } from "react";
import "./ToggleBtn.css";

export const ToggleBtn = () => {
    const [on, onSet] = useState(true);

    const statusToggle = () => {
        onSet(!on);
    }

    return (
        <div className="toggle-container">
            <h3>{on ? "Modo encendido 🌞" : "Modo Apagado 🌙"}</h3>

            <button onClick={statusToggle} className={on ? "on" : "off"}>
                {on ? "Encendido" : "Apagado"}
            </button>
        </div>
    )
}