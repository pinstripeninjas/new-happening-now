import React from "react";
import { Box, Button, Heading, Divider } from "@chakra-ui/core";

const SignIn = () => {
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
			<Button w="100%" variantColor="blue">
				Sign With Google
			</Button>
		</Box>
	);
};

export default SignIn;
