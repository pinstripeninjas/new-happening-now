import { combineReducers } from "redux";
import optionsReducer from "./optionsReducer";
import stormMotionReducer from "./stormMotionReducer";
import optionClickedReducer from "./optionClickedReducer";

export default combineReducers({
	options: optionsReducer,
	optionClicked: optionClickedReducer,
	stormMotion: stormMotionReducer,
});
