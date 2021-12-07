import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";

import pets from "./pets/reducer";


export default combineReducers({
  appState,
  user,

  pets,

});
