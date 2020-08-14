import React from "react";
import { Box, Button, Heading, Divider, Text } from "@chakra-ui/core";

import { signInWithGoogle } from "../firebase/firebase";

const SignIn = (props) => {
	return (
		<Box
			pos="absolute"
			top="50%"
			left="50%"
			transform="translate(-50%, -50%)"
			border="1px"
			rounded="md"
			borderColor="gray.200"
			boxShadow="md"
			w={400}
			p={10}>
			<Heading fontSize="2xl" textAlign="center">
				Let's get started...
			</Heading>
			<Divider my={4} />
			<Button w="100%" variantColor="blue" onClick={signInWithGoogle}>
				Sign With Google
			</Button>
			{props.invalidEmail ? (
				<Text textAlign="center" color="red.500" my={3}>
					This Account Is Not Authorized
				</Text>
			) : null}
		</Box>
	);
};

export default SignIn;
