import { RECEIVE_TRENDING } from "../actions";

type state = {
  isFetching: boolean;
  items: number[];
};

const initialState: state = {
  isFetching: false,
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TRENDING:
      return {
        ...state,
        items: action.gifs
      };
    default:
      return state;
  }
}
