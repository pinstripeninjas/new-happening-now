import React from "react";
import Graphic from "../components/Graphic";
import { Flex } from "@chakra-ui/core";
import { connect } from "react-redux";

import TextOptions from "../components/TextOptions";
import SubmitModal from "../components/SubmitModal";

class HappeningNow extends React.Component {
	state = {
		options: this.props.options,
		windDirection: 0,
		windSpeed: 0,
		optionTitle: "",
		optionContent: "",
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
			<>
				<Flex justifyContent="space-evenly" wrap="wrap-reverse" my={16}>
					<TextOptions />
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

const mapStateToProps = (state) => ({
	options: state.options,
});

export default connect(mapStateToProps)(HappeningNow);
