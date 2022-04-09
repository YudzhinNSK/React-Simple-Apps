// import store from "../store";
import {
  IS_USER_LOGGED,
  LOG_IN, LOG_OUT,
  LOG_OUT_ERROR,
  LOG_OUT_SUCCESS,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
} from "../constants";

const initialState = {
  url: "/",
  isUserLogged: localStorage.getItem("isUserLogged") ? JSON.parse(localStorage.getItem("isUserLogged")).isLogged : false,
  userData: {
    name: "Evgeny",
    surname: "Gustomyasov"
  },
  news: {},
}

export const switchReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return logIn(state, action);
    case LOG_OUT:
      return logOut(state);
    case IS_USER_LOGGED:
      return isLogged(state)
    default:
      return state;
  }
}

const logIn = (state, data) => {
  if(data.userName === "Admin" && data.password === "12345") {
    localStorage.setItem("isUserLogged", JSON.stringify({isLogged: true}));
    return {...state, isUserLogged: true, message: LOGIN_SUCCESS};
  }
  return {...state, message: LOGIN_ERROR}
}

const logOut = (state) => {
  if(!state.isUserLogged) return {message: LOG_OUT_ERROR}

  localStorage.setItem("isUserLogged", JSON.stringify({isLogged: false}))
  return {...state, isUserLogged: false, message: LOG_OUT_SUCCESS}
}

const isLogged = (state) =>{
  return state
}