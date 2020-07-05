import React from "react";
import { connect } from "react-redux";
import {
	Box,
	Flex,
	Heading,
	Divider,
	Text,
	Button,
	Stack,
	Input,
	InputGroup,
	InputRightAddon,
	NumberInput,
	NumberInputField,
	FormControl,
} from "@chakra-ui/core";

import Options from "./Options";

class TextOptions extends React.Component {
	state = {
		options: this.props.options,
		windDirection: 0,
		windSpeed: 0,
		optionTitle: "",
		optionContent: "",
	};

	handleOptionChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleAddOption = (event) => {
		event.preventDefault();
		const newOptions = [...this.state.options];
		newOptions.push({
			title: this.state.optionTitle,
			wording: this.state.optionContent,
			isChecked: false,
		});
		this.setState({
			options: newOptions,
			optionTitle: "",
			optionContent: "",
		});
	};

	handleStormMotion = (value, type) => {
		this.setState({ [type]: value });
	};

	render() {
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
					<Box h="40%">
						<Text fontWeight="semibold">Add Custom Option:</Text>
						<form onSubmit={(values) => this.handleAddOption(values)}>
							<FormControl>
								<Stack spacing={3}>
									<Input
										type="text"
										name="optionTitle"
										placeholder="Name"
										value={this.state.optionTitle}
										size="sm"
										w="none"
										onChange={this.handleOptionChange}
									/>
									<Input
										type="text"
										name="optionContent"
										placeholder="Content"
										value={this.state.optionContent}
										size="sm"
										w="none"
										onChange={this.handleOptionChange}
									/>
									<Button type="submit" variant="outline" variantColor="blue" size="sm">
										Add Item
									</Button>
								</Stack>
							</FormControl>
						</form>
					</Box>
					<Box h="10%">
						<Stack isInline align="center">
							<Text fontWeight="semibold">Storm Motion:</Text>
							<InputGroup size="sm">
								<NumberInput
									clampValueOnBlur
									value={this.state.windDirection}
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
									value={this.state.windSpeed}
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
				</Flex>
			</Box>
		);
	}
}

const mapStateToProps = (state) => ({
	options: state.options,
});

export default connect(mapStateToProps)(TextOptions);
