import React from "react";
import { Flex, Checkbox } from "@chakra-ui/core";
import { connect } from "react-redux";

class Options extends React.Component {
	state = {
		options: this.props.options,
	};

	handleClick = (event) => {
		const value = event.target.value;
		const newOptions = [...this.state.options];
		for (let option of newOptions) {
			if (option.title === value) {
				!option.isChecked ? (option.isChecked = true) : (option.isChecked = false);
				this.setState({ options: newOptions });
			}
		}
	};

	render() {
		return (
			<Flex w="100%" wrap="wrap">
				{this.state.options.map((option, i) => {
					return (
						<Checkbox
							key={i}
							w="50%"
							my={1}
							size="md"
							value={option.title}
							onClick={this.handleClick}>
							{option.title}
						</Checkbox>
					);
				})}
			</Flex>
		);
	}
}

const mapStateToProps = (state) => ({
	options: state.options,
});

export default connect(mapStateToProps)(Options);
