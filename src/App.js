import React, { useState } from "react";
import classNames from "./App.module.css";

function App() {
	const [likes, setLikes] = useState(100);
	const [clicked, setClicked] = useState(false);
	const baseClass = [classNames["like-button"]];
	const clickedClass = baseClass.concat([classNames.liked]);
	const [buttonClassNames, setButtonClassNames] = useState(baseClass);
	const clickLike = () => {
		if (clicked) {
			setLikes(likes - 1);
			setClicked(false);
			setButtonClassNames(baseClass);
		} else {
			setClicked(true);
			setLikes(likes + 1);
			setButtonClassNames(clickedClass);
		}
	};
	return (
		<div className="App">
			<button onClick={clickLike} className={buttonClassNames.join(" ")}>
				Like | <span className="likes-counter">{likes}</span>
			</button>
		</div>
	);
}

export default App;
