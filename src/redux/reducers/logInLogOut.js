import {
  LOG_OUT,
} from "../constants";
import { LOG_IN_SUCCESS } from "../../api/constants";

const initialState = {
  isUserLogged: localStorage.getItem("isUserLogged") ? JSON.parse(localStorage.getItem("isUserLogged")).isLogged : false,
  user: null,
};

export const switchReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return logIn(state);
    case LOG_OUT:
      return logOut(state);
    default:
      return state;
  }
};

const logIn = (state) => {
  const user = {
    name: "User_name",
    surname: "User_surname",
  };
  localStorage.setItem("isUserLogged", JSON.stringify({ isLogged: true }));
  return { ...state, isUserLogged: true, user: { ...user } };
};

const logOut = (state) => {
  if (!state.isUserLogged) return state;

  localStorage.setItem("isUserLogged", JSON.stringify({ isLogged: false }));
  return { ...state, isUserLogged: false, user: null };
};