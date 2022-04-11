import {combineReducers} from "redux";
import {switchReducer} from "./logInLogOut";
import { errors } from "./errors";
import { loading } from "./loading";
import { news } from "./news";

const reducer = combineReducers({
  switchReducer,
  errors,
  loading,
  news,
})

export default reducer;