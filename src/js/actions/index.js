import axios from "axios";

export function getData(value) {
  return function (dispatch) {
    const url = `http://localhost:3000/search/`;
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: JSON.stringify(value),
      mode: "no-cors",
    };
    axios.post(url, requestOptions).then((response) => {
      dispatch({ type: "DATA_LOADED", payload: response.data });
    });
  };
}
