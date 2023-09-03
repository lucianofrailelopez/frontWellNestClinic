import { LOGIN_USER } from "../actions/types";

const initialState = {
  user: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        user: payload,
      };
  }
};

export default rootReducer;
