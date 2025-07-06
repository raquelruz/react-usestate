import { useState } from "react";
import "./LikeBtn.css";

export const LikeBtn = () => {
	const [likes, setLikes] = useState(0);

	return (
		<div className="likebtn-container">
			<button onClick={() => setLikes(likes + 1)} aria-label="Dar like">
				👍 Like
			</button>
			<span className="counter-likes">{likes}</span>
		</div>
	);
};
