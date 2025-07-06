import { useState } from "react";
import "./Counter.css";

export const Counter = () => {
	const [account, setAccount] = useState(0);

	return (
		<div className="counter-container">
			<h2>Contador</h2>
			<h3>{account}</h3>
		<button onClick={() => {
			console.log("Sumar:", account);
			setAccount(account + 1);
		}}>Sumar</button>

		<button onClick={() => {
			console.log("Restar", account);
			setAccount(account - 1);
		}}>Restar</button>
		</div>
	)
}