import fetch from "cross-fetch";

export const REQUEST_TRENDING = "REQUEST_TRENDING";
function requestTrending() {
  return {
    type: REQUEST_TRENDING
  };
}

export const RECEIVE_TRENDING = "RECEIVE_TRENDING";
function receiveTrending(json) {
  return {
    type: RECEIVE_TRENDING,
    gifs: json.data,
    offset: json.pagination.offset + json.pagination.count
  };
}

export function fetchGifs(): any {
  return function(dispatch, getState) {
    dispatch(requestTrending());

    const limit = 100;
    const state = getState();
    const offset = state.gifs.offset;
    const searching = state.gifs.searchString.length > 0;
    const baseUrl = searching
      ? `${process.env.REACT_APP_GIPHY_URL}/gifs/search`
      : `${process.env.REACT_APP_GIPHY_URL}/gifs/trending`;

    let params = `api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=${limit}&offset=${offset}`;
    if (searching) {
      params += `&q=${state.gifs.searchString}`;
    }

    const url = `${baseUrl}?${params}`;

    return fetch(url)
      .then(response => response.json())
      .then(response => {
        dispatch(receiveTrending(response));
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
