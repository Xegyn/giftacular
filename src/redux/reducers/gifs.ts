import { RECEIVE_TRENDING, REQUEST_TRENDING } from "../actions";

type state = {
  isFetching: boolean;
  items: number[];
  offset: number;
};

const initialState: state = {
  isFetching: false,
  items: [],
  offset: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TRENDING:
      return { ...state, isFetching: true };
    case RECEIVE_TRENDING:
      return {
        ...state,
        isFetching: false,
        items: state.items.concat(action.gifs),
        offset: action.offset
      };
    default:
      return state;
  }
}
