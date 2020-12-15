export function getData(value) {
  return function (dispatch) {
    const url = `http://localhost:3000/search/`;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: value }),
        mode: "no-cors"
    };
    return fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        const { articles } = json;
        dispatch({ type: "DATA_LOADED", payload: { articles } });
      });
  };
}
