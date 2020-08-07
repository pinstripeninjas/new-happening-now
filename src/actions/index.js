export const createOption = (title, wording) => {
	const wordingArray = [];
	for (let i = 0; i < 4; i++) {
		wordingArray.push(wording);
	}
	return {
		type: "CREATE_OPTION",
		payload: {
			title: title,
			wording: wordingArray,
			isChecked: false,
		},
	};
};

export const optionClicked = (title) => {
	return {
		type: "OPTION_CLICKED",
		payload: title,
	};
};

export const updateStormMotion = (value, element) => {
	return {
		type: "UPDATE_STORM_MOTION",
		payload: {
			value: value,
			element: element,
		},
	};
};
