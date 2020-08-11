export const createOption = (title, wording) => {
	return {
		type: "CREATE_OPTION",
		payload: {
			title: title,
			wording: wording,
			isChecked: false,
			icon: "warning",
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
