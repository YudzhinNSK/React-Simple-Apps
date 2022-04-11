import { GET_NEWS, LOG_IN, LOG_OUT, SET_LATEST_NEWS } from "../constants";

export const logIn = (data) => {
  return {
    type: LOG_IN,
    password: data.password,
    userName: data.userName
  }
}

export const logOut = () => ({
  type: LOG_OUT
})

export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload,
});

export const getNews = () => ({
  type: GET_NEWS,
});

