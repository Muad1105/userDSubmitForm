import { combineReducers } from "redux";
import ActionBtnReducer from "../plugins/action-button/redux/reducer";
import UserReducer from "../containers/user/redux/reducer";
import welcomeReducer from "../containers/main-container/redux/reducer";

const rootReducer = combineReducers({
  actionBtn: ActionBtnReducer,
  userReducer: UserReducer,
  welcome: welcomeReducer,
  // all reducers
});

export default rootReducer;
