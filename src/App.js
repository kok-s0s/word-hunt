import { useState, useEffect } from "react";
import { Container, Switch } from "@material-ui/core";
import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App() {
	const [word, setWord] = useState("");
	const [meanings, setMeanings] = useState([]);
	const [category, setCategory] = useState("en");
	const [LightTheme, setLightTheme] = useState(false);

	const dictionaryApi = async () => {
		try {
			const data = await axios.get(
				`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
			);

			setMeanings(data.data);
		} catch (err) {
			console.log(err);
		}
	};

	console.log(meanings);

	useEffect(() => {
		dictionaryApi();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [word, category]);

	return (
		<div
			className="App"
			style={{
				height: "100vh",
				backgroundColor: LightTheme ? "#fff" : "#282c34",
				color: LightTheme ? "black" : "white",
				transition: "all 0.5s linear",
			}}
		>
			<Container maxWidth="md">
				<div
					style={{
						position: "absolute",
						top: 0,
						right: 15,
						paddingTop: 10,
					}}
				>
					<span>{LightTheme ? "Dark" : "Light"} Mode</span>
					<Switch
						checked={LightTheme}
						onChange={() => setLightTheme(!LightTheme)}
					/>
				</div>
				<Header
					category={category}
					setCategory={setCategory}
					word={word}
					setWord={setWord}
					LightTheme={LightTheme}
				/>
				<Content
					word={word}
					meanings={meanings}
					category={category}
					LightTheme={LightTheme}
				/>
			</Container>
		</div>
	);
}

export default App;
