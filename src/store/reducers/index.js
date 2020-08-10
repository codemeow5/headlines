import { combineReducers } from "redux";

import sources from "../slices/sources";
import apps from "../slices/apps";
import clock from "../slices/clock";
import search from "../slices/search";
import ui from "../slices/ui";

const rootReducer = combineReducers({
  sources,
  apps,
  clock,
  search,
  ui,
});

export default rootReducer;
