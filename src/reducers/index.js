import { combineReducers } from "redux";
import FakeReducer from "./FakeReducer";

export default combineReducers({
  fake: FakeReducer,
});
