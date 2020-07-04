import React from "react";
import { Box, Heading, Flex, Divider, Text, Stack, Icon } from "@chakra-ui/core";
import StormMotion from "./StormMotion";

const Graphic = ({ options, direction, speed }) => {
	const fillActions = () => {
		return options.map((action, i) => {
			return action.isChecked ? (
				<Stack key={i} isInline spacing={2} align="center">
					<Icon name="warning" size="20px" color="red.500" />
					<Text fontSize="xl">{action.wording}</Text>
				</Stack>
			) : null;
		});
	};

	return (
		<Box border="1px" rounded="md" borderColor="gray.200" boxShadow="md" w={1100} h={550}>
			<Flex h="100%">
				<Box w={450} h="100%" position="relative" p={5}>
					<Heading textAlign="center">Happening Now</Heading>
					<Divider />
					<Stack>{fillActions()}</Stack>
					<StormMotion direction={direction} speed={speed} />
				</Box>
				<Box
					as="iframe"
					w="100%"
					h="100%"
					// src="https://noaa.maps.arcgis.com/apps/Minimalist/index.html?appid=c6b1683232fe4bb9a10833c6dffbcd04"
					alt="demo"
				/>
			</Flex>
		</Box>
	);
};

export default Graphic;
