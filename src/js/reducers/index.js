const initialState = {
  articles: [],
  value: '',
  loading: true,
};

export default function rootReducer(state = initialState, action) {
  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload.articles),
      loading: false
    });
  }
  return state;
}
