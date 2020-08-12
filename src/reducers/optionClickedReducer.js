const optionClickedReducer = (state = [], action) => {
	switch (action.type) {
		case "OPTION_CLICKED":
			if (state.includes(action.payload)) {
				return state.filter((element) => element !== action.payload);
			} else {
				return [...state, action.payload];
			}
		default:
			return state;
	}
};

export default optionClickedReducer;
