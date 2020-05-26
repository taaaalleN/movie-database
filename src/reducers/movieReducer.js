export const movieReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        data: [...action.payload, { watchlisted: false }],
        loading: false,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        data: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
