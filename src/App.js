import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./pages/Navbar";
import SignIn from "./pages/SignIn";
import HappeningNow from "./pages/HappeningNow";
import "./App.css";

class App extends React.Component {
	render() {
		return (
			<ThemeProvider>
				<CSSReset />
				<BrowserRouter>
					<Navbar />
					<Route exact path="/" component={SignIn} />
					<Route exact path="/happening-now" component={HappeningNow} />
				</BrowserRouter>
			</ThemeProvider>
		);
	}
}

export default App;
