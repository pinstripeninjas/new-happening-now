import React from "react";
import { Box, Heading, Button } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../firebase/firebase";
import { setCurrentUser } from "../actions";

const Navbar = ({ currentUser, setCurrentUser }) => {
	const signout = () => {
		auth.signOut();
		setCurrentUser(null);
	};

	return (
		<Box borderBottom="1px" borderColor="gray.200" p={3} display="flex" alignItems="center">
			<Heading>Happening Now Creator</Heading>
			{currentUser ? (
				<Button marginLeft="auto" as="button" variantColor="blue">
					<NavLink to="/" onClick={signout}>
						Sign Out
					</NavLink>
				</Button>
			) : null}
		</Box>
	);
};

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { setCurrentUser })(Navbar);
