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
  isUserLogged: localStorage.getItem("isUserLogged") ? JSON.parse(localStorage.getItem("isUserLogged")).isLogged : false,
  user: null,
}

export const switchReducer = (state = initialState , action) => {
  switch (action.type) {
    case LOG_IN:
      return logIn(state, action);
    case LOG_OUT:
      return logOut(state);
    default:
      return state;
  }
}

const logIn = (state, data) => {
  if(data.userName === "Admin" && data.password === "12345") {
    const user = {
      name: "Evgeny",
      surname: "Gustomyasov"
    }
    localStorage.setItem("isUserLogged", JSON.stringify({isLogged: true}));
    return {...state, isUserLogged: true, user: {...user}};
  }
  return state
}

const logOut = (state) => {
  if(!state.isUserLogged) return state

  localStorage.setItem("isUserLogged", JSON.stringify({isLogged: false}))
  return {...state, isUserLogged: false, user: null}
}