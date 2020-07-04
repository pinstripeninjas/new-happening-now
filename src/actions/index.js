export const createOption = (title, wording) => {
	return {
		type: "CREATE_OPTION",
		payload: {
			title: title,
			wording: wording,
		},
	};
};
