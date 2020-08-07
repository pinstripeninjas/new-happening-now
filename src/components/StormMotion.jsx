import React from "react";
import { Box, Heading, Text, Stack, Divider } from "@chakra-ui/core";
import { WiWindDeg } from "react-icons/wi";
import { connect } from "react-redux";

const StormMotion = ({ windSpeed, windDirection }) => {
	return (
		<Box position="absolute" bottom="0" left="0" p={5} w="100%">
			<Heading fontSize="2xl">Storm Motion:</Heading>
			<Divider />
			<Stack isInline align="center">
				{windSpeed === 0 ? (
					<Text color="blue.500" fontSize="3xl" fontWeight="bold">
						Nearly Stationary
					</Text>
				) : (
					<>
						<Text color="blue.500" fontSize="4xl" fontWeight="bold">
							{`${windSpeed} mph`}
						</Text>
						<Box
							as={WiWindDeg}
							size="70px"
							color="blue.500"
							transform={`rotate(${windDirection}deg)`}
						/>
					</>
				)}
			</Stack>
		</Box>
	);
};

const mapStateToProps = (state) => ({
	windSpeed: state.stormMotion.windSpeed,
	windDirection: state.stormMotion.windDirection,
});

export default connect(mapStateToProps)(StormMotion);
