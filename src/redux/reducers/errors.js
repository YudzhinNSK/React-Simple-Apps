import { LOGIN_ERROR, SET_LATEST_NEWS_ERROR } from "../constants";

const initialState = {
  logInError: '',
  latestNewsError: '',
};

export const errors = (state = initialState, { type, message, payload }) => {
  switch (type) {
    case LOGIN_ERROR:
      return {
        ...state,
        logInError: message,
      };
    case SET_LATEST_NEWS_ERROR:
      return {
        ...state,
        latestNewsError: payload,
      };
    default: return state;
  }
};