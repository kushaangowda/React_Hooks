import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
	const [title, setTitle] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title != "") {
			addSong(title);
			setTitle("");
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				onChange={(e) => {
					setTitle(e.target.value);
				}}
				value={title}
			/>
			<input type="submit" value="Add Song" />
		</form>
	);
};

export default NewSongForm;
