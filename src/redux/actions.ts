import fetch from "cross-fetch";
import { State } from "./reducers";

export const REQUEST_GIFS = "REQUEST_GIFS";
function requestGifs() {
  return {
    type: REQUEST_GIFS
  };
}

export const ERROR_GIFS = "ERROR_GIFS";
function errorGifs() {
  return {
    type: ERROR_GIFS
  };
}

export const RECEIVE_GIFS = "RECEIVE_GIFS";
function receiveGifs(json) {
  return {
    type: RECEIVE_GIFS,
    gifs: json.data,
    offset: json.pagination.offset + json.pagination.count,
    totalCount: json.pagination.total_count
  };
}

export function fetchGifs(): any {
  return function(dispatch, getState) {
    const state: State = getState();

    if (state.gifs.isFetching) {
      return;
    }

    let limit = 100;
    const totalCount = state.gifs.totalCount;
    if (totalCount) {
      if (state.gifs.offset >= totalCount) {
        return;
      } else if (state.gifs.offset + limit > totalCount) {
        limit = totalCount - state.gifs.offset;
      }
    }

    dispatch(requestGifs());

    const offset = state.gifs.offset;
    const searching = state.gifs.searchString.length > 0;
    const baseUrl = searching
      ? `${process.env.REACT_APP_GIPHY_URL}/gifs/search`
      : `${process.env.REACT_APP_GIPHY_URL}/gifs/trending`;

    let params = `api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=${limit}&offset=${offset}`;
    if (searching) {
      params += `&q=${escape(state.gifs.searchString)}`;
    }

    const url = `${baseUrl}?${params}`;

    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error("API request failed.");
        }
        return response.json();
      })
      .then(response => {
        dispatch(receiveGifs(response));
      })
      .catch(error => {
        dispatch(errorGifs());
      });
  };
}

export const SET_NEW_SEARCH = "SET_NEW_SEARCH";
export function setNewSearch(searchString: string) {
  return {
    type: SET_NEW_SEARCH,
    searchString
  };
}

export const OPEN_FULL_SCREEN = "OPEN_FULL_SCREEN";
export function openFullScreen(index: number) {
  return {
    type: OPEN_FULL_SCREEN,
    index
  };
}

export const CLOSE_FULL_SCREEN = "CLOSE_FULL_SCREEN";
export function closeFullScreen() {
  return {
    type: CLOSE_FULL_SCREEN
  };
}
