import React, { useState, useEffect } from "react";
import { v1 } from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
	const [songs, setSongs] = useState([
		{ title: "Counting Stars", id: 1 },
		{ title: "Final Countdown", id: 2 },
		{ title: "Battle Cry", id: 3 },
	]);

	const [age, setAge] = useState(20);

	const addSong = (title) => {
		setSongs([...songs, { title: title, id: v1() }]);
	};

	// useEffect runs whenever component is updated
	useEffect(() => {
		console.log("useEffect hook ran, songs changed", songs);
	}, [songs]);
	// adding songs, this is run only when songs state changes

	useEffect(() => {
		console.log("useEffect hook ran, age changed", age);
	}, [age]);

	return (
		<div className="song-list">
			<h2>Songs List</h2>
			<ul>
				{songs.map((song) => {
					return <li key={song.id}>{song.title}</li>;
				})}
			</ul>
			<NewSongForm addSong={addSong} />
			<button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
		</div>
	);
};

export default SongList;
