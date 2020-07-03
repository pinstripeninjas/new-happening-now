import React from "react";
import Graphic from "../components/Graphic";
import {
	Flex,
	Box,
	Heading,
	Divider,
	Text,
	Button,
	Checkbox,
	Stack,
	Input,
	InputGroup,
	InputRightAddon,
	NumberInput,
	NumberInputField,
	FormControl,
} from "@chakra-ui/core";
import { importedOptions } from "../options/options";
import SubmitModal from "../components/SubmitModal";

class HappeningNow extends React.Component {
	state = {
		options: importedOptions,
		windDirection: 0,
		windSpeed: 0,
		optionName: "",
		optionContent: "",
	};

	createOptions = () => {
		return (
			<Flex w="100%" wrap="wrap">
				{this.state.options.map((option, i) => {
					return (
						<Checkbox
							key={i}
							w="50%"
							my={1}
							size="md"
							value={option.type}
							onClick={this.handleClick}>
							{option.type}
						</Checkbox>
					);
				})}
			</Flex>
		);
	};

	handleClick = (event) => {
		const value = event.target.value;
		const newOptions = [...this.state.options];
		for (let option of newOptions) {
			if (option.type === value) {
				!option.isChecked ? (option.isChecked = true) : (option.isChecked = false);
				this.setState({ options: newOptions });
			}
		}
	};

	handleOptionChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleAddOption = (event) => {
		event.preventDefault();
		const newOptions = [...this.state.options];
		newOptions.push({
			type: this.state.optionName,
			wording: this.state.optionContent,
			isChecked: false,
		});
		this.setState({
			options: newOptions,
			optionName: "",
			optionContent: "",
		});
	};

	handleStormMotion = (value, type) => {
		this.setState({ [type]: value });
	};

	render() {
		return (
			<>
				<Flex justifyContent="space-evenly" wrap="wrap-reverse" my={16}>
					<Box
						mt={8}
						border="1px"
						rounded="md"
						borderColor="gray.200"
						boxShadow="md"
						w={400}
						h={550}>
						<Flex direction="column" p={5} h="100%" justify="space-between">
							<Box h="50%">
								<Heading mb={0} textAlign="center">
									Text Options
								</Heading>
								<Divider mx={0} />
								{this.createOptions()}
							</Box>
							<Box h="40%">
								<Text fontWeight="semibold">Add Custom Option:</Text>
								<form onSubmit={(values) => this.handleAddOption(values)}>
									<FormControl>
										<Stack spacing={3}>
											<Input
												type="text"
												name="optionName"
												placeholder="Name"
												value={this.state.optionName}
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
					<Graphic
						options={this.state.options}
						direction={this.state.windDirection}
						speed={this.state.windSpeed}
					/>
				</Flex>

				<SubmitModal />
			</>
		);
	}
}

export default HappeningNow;
