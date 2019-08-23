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
    gifs: json.data
  };
}

export function fetchTrending(): any {
  return function(dispatch) {
    const params = `api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;
    const url = `${process.env.REACT_APP_GIPHY_URL}/gifs/trending?${params}`;

    return fetch(url)
      .then(response => response.json())
      .then(response => {
        dispatch(receiveTrending(response));
      });
  };
}

export default requestTrending;
