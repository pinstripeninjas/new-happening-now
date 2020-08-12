import { standardOptions } from "../options/options";

const optionsReducer = (state = standardOptions, action) => {
	switch (action.type) {
		case "CREATE_OPTION":
			return [...state, action.payload];
		// case "OPTION_CLICKED":
		// 	return state.map((option) =>
		// 		option.title === action.payload ? { ...option, isChecked: !option.isChecked } : option
		// 	);
		default:
			return state;
	}
};

export default optionsReducer;
