import { standardOptions } from "../options/options";

const optionsReducer = (state = standardOptions, action) => {
	switch (action.type) {
		case "CREATE_OPTION":
			return [...state, action.payload];
		default:
			return state;
	}
};

export default optionsReducer;
