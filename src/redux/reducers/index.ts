import { combineReducers } from "redux";
import gifs from "./gifs";
import view from "./view";
import { State as GifState } from "./gifs";
import { State as ViewState } from "./view";

export type State = {
  gifs: GifState;
  view: ViewState;
};
export default combineReducers({ gifs, view });
