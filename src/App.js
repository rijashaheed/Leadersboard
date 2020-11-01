import React from "react";
import "./App.css";
import Student from "./Student";

function App() {
	return (
		<div className="App">
			<h1 className="leadersBoardHead">Leadersboard</h1>
			<Student name="Hamna Shaheed" university="NED University" scores={347} />
			<Student name="Hassan Khan" university="NUST" scores={347} />
			<Student name="Uroosa Shah" university="FAST NUCES" scores={342} />
			<Student name="Ahmed Ali" university="Karachi University" scores={348} />
			<Student name="Mehak Qureshi" university="SZABIST" scores={340} />
			<Student name="Hafsa Shaheed" university="SZABIST" scores={339} />
		</div>
	);
}

export default App;
