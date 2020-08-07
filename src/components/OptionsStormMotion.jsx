import React from "react";
import { connect } from "react-redux";
import {
	Box,
	Stack,
	Text,
	InputGroup,
	NumberInput,
	NumberInputField,
	InputRightAddon,
} from "@chakra-ui/core";

import { updateStormMotion } from "../actions";

class OptionsStormMotion extends React.Component {
	handleStormMotion = (value, type) => {
		this.props.updateStormMotion(value, type);
	};

	render() {
		return (
			<Box h="10%">
				<Stack isInline align="center">
					<Text fontWeight="semibold">Storm Motion:</Text>
					<InputGroup size="sm">
						<NumberInput
							clampValueOnBlur
							value={this.props.windDirection}
							min={0}
							max={360}
							w={60}
							onChange={(value) => this.handleStormMotion(value, "windDirection")}>
							<NumberInputField />
						</NumberInput>
						<InputRightAddon children="deg" />
					</InputGroup>
					<InputGroup size="sm">
						<NumberInput
							clampValueOnBlur
							value={this.props.windSpeed}
							min={0}
							max={75}
							w={50}
							onChange={(value) => this.handleStormMotion(value, "windSpeed")}>
							<NumberInputField />
						</NumberInput>
						<InputRightAddon children="mph" />
					</InputGroup>
				</Stack>
			</Box>
		);
	}
}

const mapStateToProps = (state) => ({
	windSpeed: state.stormMotion.windSpeed,
	windDirection: state.stormMotion.windDirection,
});

export default connect(mapStateToProps, { updateStormMotion })(OptionsStormMotion);
