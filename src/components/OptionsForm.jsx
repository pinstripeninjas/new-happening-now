import React from "react";
import { connect } from "react-redux";
import { Text, Box, FormControl, Input, Button, Stack } from "@chakra-ui/core";

import { createOption } from "../actions";

class OptionsForm extends React.Component {
	state = {
		optionTitle: "",
		optionContent: "",
	};

	handleOptionChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleAddOption = (event) => {
		event.preventDefault();
		this.props.createOption(this.state.optionTitle, this.state.optionContent);

		this.setState({
			optionTitle: "",
			optionContent: "",
		});
	};

	render() {
		return (
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
		);
	}
}

export default connect(null, { createOption })(OptionsForm);
