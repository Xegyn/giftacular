import { RECEIVE_TRENDING, REQUEST_TRENDING, SET_NEW_SEARCH } from "../actions";

type State = {
  isFetching: boolean;
  items: number[];
  offset: number;
  searchString: string;
};

const initialState: State = {
  isFetching: false,
  items: [],
  offset: 0,
  searchString: ""
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
    case SET_NEW_SEARCH:
      return {
        ...state,
        searchString: action.searchString,
        offset: 0,
        items: []
      };
    default:
      return state;
  }
}
