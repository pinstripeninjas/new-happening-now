const INITIAL_STATE = {
	windDirection: 0,
	windSpeed: 0,
};

const stormMotionReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "UPDATE_STORM_MOTION":
			return { ...state, [action.payload.element]: action.payload.value };
		default:
			return state;
	}
};

export default stormMotionReducer;
