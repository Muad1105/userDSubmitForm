import { ActionButtonEvents } from "./events";
import axios from "axios";

const initialState = {
  actionTriggered: [{}],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionButtonEvents.POST_USER_DATA + "_FULFILLED": {
      return action.payload;
    }

    default:
      return state;
  }
};
export default reducer;
