import React from "react";
import Graphic from "../components/Graphic";
import { Flex } from "@chakra-ui/core";

import TextOptions from "../components/TextOptions";
import SubmitModal from "../components/SubmitModal";

const HappeningNow = () => {
	return (
		<>
			<Flex justifyContent="space-evenly" wrap="wrap-reverse" my={16}>
				<TextOptions />
				<Graphic />
			</Flex>

			<SubmitModal />
		</>
	);
};

export default HappeningNow;
