import Events from "./events";
import axios from "axios";
import config from "../../../config";

export const postUserData = (payload) => ({
  type: Events.POST_USER_DATA,
  payload: axios.post(config.API_URL + 'dummy', payload),
});

export const clearPostUserData = () => ({
  type: Events.CLEAR_POSTUSER_DATA,
  payload: {}
})