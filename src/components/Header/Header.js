import React from "react";
import "./Header.css";
import {
	TextField,
	createTheme,
	ThemeProvider,
	MenuItem,
} from "@material-ui/core";
import categories from "../../data/category";

const Header = ({ category, setCategory, word, setWord, LightTheme }) => {
	const darkTheme = createTheme({
		palette: {
			primary: {
				main: LightTheme ? "#000" : "#fff",
			},
			type: LightTheme ? "light" : "dark",
		},
	});

	const handleChange = (language) => {
		setCategory(language);
		setWord("");
	};

	return (
		<div className="header">
			<span className="title">{word ? word : "Word Hunt"}</span>
			<div className="inputs">
				<ThemeProvider theme={darkTheme}>
					<TextField
						className="search"
						label="Search a Word"
						variant="standard"
						value={word}
						onChange={(e) => setWord(e.target.value)}
					/>
					<TextField
						className="select"
						select
						label="Language"
						value={category}
						onChange={(e) => handleChange(e.target.value)}
						variant="standard"
					>
						{categories.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
				</ThemeProvider>
			</div>
		</div>
	);
};

export default Header;
