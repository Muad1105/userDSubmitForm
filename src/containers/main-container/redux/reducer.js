import Events from "./events";
import axios from "axios";

const initialState = {
  createUserData: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Events.POST_USER_DATA + "_FULFILLED": {
      return {
        ...state,
        createUserData: true
      }
    }
    case  Events.CLEAR_POSTUSER_DATA: {
      return {
        ...state,
        createUserData: false
      }
    }

    default:
      return state;
  }
};
export default reducer;
