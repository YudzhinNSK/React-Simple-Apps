import {combineReducers} from "redux";
import {switchReducer} from "./logInLogOut";

const reducer = combineReducers({
  switchReducer,
})

export default reducer;