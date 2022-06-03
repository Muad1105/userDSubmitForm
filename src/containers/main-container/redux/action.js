import { ActionButtonEvents } from "./events";
import axios from "axios";
import postUser from "./postUser";

export const triggerActionButton = (value) => ({
  type: ActionButtonEvents.POST_USER_DATA,
  payload: axios.post(postUser.API_URL, value),
});

// export const clearTriggerActionButton = () => ({
//   type: ActionButtonEvents.CLEAR_TRIGGER_ACTION_BUTTON,
// });
