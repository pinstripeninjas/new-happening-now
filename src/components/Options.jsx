import React from "react";
import { Flex, Checkbox } from "@chakra-ui/core";
import { connect } from "react-redux";
import { optionClicked } from "../actions/";

const Options = (props) => {
	const handleClick = (event) => {
		props.optionClicked(event.target.value);
	};

	return (
		<Flex w="100%" wrap="wrap">
			{props.options.map((option, i) => {
				return (
					<Checkbox key={i} w="50%" my={1} size="md" value={option.title} onChange={handleClick}>
						{option.title}
					</Checkbox>
				);
			})}
		</Flex>
	);
};

const mapStateToProps = (state) => ({
	options: state.options,
});

export default connect(mapStateToProps, { optionClicked })(Options);
