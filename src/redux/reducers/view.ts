import { OPEN_FULL_SCREEN, CLOSE_FULL_SCREEN } from "../actions";

type State = {
  fullScreen: boolean;
  index: number | null;
};

const initialState: State = {
  fullScreen: false,
  index: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_FULL_SCREEN:
      return { ...state, fullScreen: true, index: action.index };
    case CLOSE_FULL_SCREEN:
      return { ...state, fullScreen: false, url: null };
    default:
      return state;
  }
}
