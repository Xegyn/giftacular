import { RECEIVE_GIFS, REQUEST_GIFS, SET_NEW_SEARCH, ERROR_GIFS } from "../actions";

export type State = {
  isFetching: boolean;
  error: boolean;
  items: number[];
  offset: number;
  totalCount: number | null;
  searchString: string;
};

const initialState: State = {
  isFetching: false,
  error: false,
  items: [],
  offset: 0,
  totalCount: null,
  searchString: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GIFS:
      return { ...state, isFetching: true, error: false };
    case RECEIVE_GIFS:
      return {
        ...state,
        isFetching: false,
        items: state.items.concat(action.gifs),
        offset: action.offset,
        totalCount: action.totalCount
      };
    case ERROR_GIFS:
      return {
        ...state,
        isFetching: false,
        error: true
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
