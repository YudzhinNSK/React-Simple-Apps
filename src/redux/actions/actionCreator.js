import { IS_USER_LOGGED, LOG_IN, LOG_OUT } from "../constants";

export const logIn = (data) => {
  return {
    type: LOG_IN,
    userName: data.userName,
    password: data.password,
  }
}

export const logOut = () => ({
  type: LOG_OUT
})

export const isUserLogged = () => {
  return {
    type: IS_USER_LOGGED
  }
}