import { RECEIVE_TRENDING, REQUEST_TRENDING, SET_NEW_SEARCH } from "../actions";

export type State = {
  isFetching: boolean;
  items: number[];
  offset: number;
  totalCount: number | null;
  searchString: string;
};

const initialState: State = {
  isFetching: false,
  items: [],
  offset: 0,
  totalCount: null,
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
        offset: action.offset,
        totalCount: action.totalCount
      };
    case SET_NEW_SEARCH:
      return {
        ...state,
        searchString: action.searchString,
        offset: 0,
        totalCount: null,
        items: []
      };
    default:
      return state;
  }
}
