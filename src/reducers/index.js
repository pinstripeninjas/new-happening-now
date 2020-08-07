import { combineReducers } from "redux";
import optionsReducer from "./optionsReducer";
import stormMotionReducer from "./stormMotionReducer";

export default combineReducers({
	options: optionsReducer,
	stormMotion: stormMotionReducer,
});
