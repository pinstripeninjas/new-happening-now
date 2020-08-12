import React from "react";
import Graphic from "../components/Graphic";
import { Flex, Button } from "@chakra-ui/core";
import { saveAsPng } from "save-html-as-image";

import TextOptions from "../components/TextOptions";
import SubmitModal from "../components/SubmitModal";

const HappeningNow = () => {
	const imageCapture = () => {
		const node = document.getElementById("capture");
		saveAsPng(node, { filename: "happening now", printDate: true });
	};

	return (
		<>
			<Flex justifyContent="space-evenly" wrap="wrap-reverse" my={16}>
				<TextOptions />
				<Graphic />
			</Flex>
			<Flex justifyContent="center">
				<Button d="block" mx={4} my={8} variantColor="blue" size="lg" onClick={imageCapture}>
					Download Image
				</Button>
				<SubmitModal />
			</Flex>
		</>
	);
};

export default HappeningNow;
