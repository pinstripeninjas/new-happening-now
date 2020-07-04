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
