import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";

import pet from "./pet/reducer";

export default combineReducers({
  appState,
  user,

  pet,
});
