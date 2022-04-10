import { LOG_IN, LOG_OUT } from "../constants";

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