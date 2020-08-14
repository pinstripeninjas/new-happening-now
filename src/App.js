import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { auth, firestore } from "./firebase/firebase";

import Navbar from "./pages/Navbar";
import SignIn from "./pages/SignIn";
import HappeningNow from "./pages/HappeningNow";
import { setCurrentUser } from "./actions";
import { connect } from "react-redux";
import "./App.css";
import "./css/weather-icons.min.css";

class App extends React.Component {
	state = { invalidEmail: false };

	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			const firestoreEmails = firestore.doc("validUser/validEmail");
			firestoreEmails.get().then((doc) => {
				const validEmails = doc.data();
				if (user && validEmails.email.includes(user.email)) {
					setCurrentUser(user);
					this.setState({ invalidEmail: false });
				} else if (user && !validEmails.email.includes(user.email)) {
					auth.signOut();
					this.setState({ invalidEmail: true });
				}
			});
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<ThemeProvider>
				<CSSReset />
				<BrowserRouter>
					<Navbar />
					<Route exact path="/">
						{this.props.currentUser ? (
							<Redirect to="/happening-now" />
						) : (
							<SignIn invalidEmail={this.state.invalidEmail} />
						)}
					</Route>
					<Route
						exact
						path="/happening-now"
						render={() => (!this.props.currentUser ? <Redirect to="/" /> : <HappeningNow />)}
					/>
				</BrowserRouter>
			</ThemeProvider>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { setCurrentUser })(App);
