import React from "react";
import { Box, Flex, Heading, Divider } from "@chakra-ui/core";

import Options from "./Options";
import OptionsForm from "./OptionsForm";
import OptionsStormMotion from "./OptionsStormMotion";

const TextOptions = () => {
	return (
		<Box mt={8} border="1px" rounded="md" borderColor="gray.200" boxShadow="md" w={400} h={550}>
			<Flex direction="column" p={5} h="100%" justify="space-between">
				<Box h="50%">
					<Heading mb={0} textAlign="center">
						Text Options
					</Heading>
					<Divider mx={0} />
					<Options />
				</Box>
				<OptionsForm />
				<OptionsStormMotion />
			</Flex>
		</Box>
	);
};

export default TextOptions;
