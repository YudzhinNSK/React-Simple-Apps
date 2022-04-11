import { LOADING_START, LOADING_FINISH } from "../constants";

const initialState = {
  load: false,
};

export const loading = (state = initialState, { type }) => {
  switch (type) {
    case LOADING_START:
      return {
        ...state,
        load: true,
      };
    case LOADING_FINISH:
      return {
        ...state,
        load: false,
      };
    default: return state;
  }
};
