import React from "react";
import Graphic from "../components/Graphic";
import { Flex } from "@chakra-ui/core";
import { connect } from "react-redux";

import TextOptions from "../components/TextOptions";
import SubmitModal from "../components/SubmitModal";

class HappeningNow extends React.Component {
	state = {
		options: this.props.options,
		optionTitle: "",
		optionContent: "",
	};

	render() {
		return (
			<>
				<Flex justifyContent="space-evenly" wrap="wrap-reverse" my={16}>
					<TextOptions />
					<Graphic options={this.state.options} />
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
