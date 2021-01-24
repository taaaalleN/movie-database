export const movieReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: [...action.payload],
        loading: false,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };
    case "RESET_MOVIES":
      return {
        ...state,
        data: [],
        loading: false,
        error: "",
      };
    case "ADD_TO_WATCHLIST":
      console.log("Adding to watchlist", action.payload);
      // console.log("ID: ", action.payload.id);
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };
    case "REMOVE_FROM_WATCHLIST":
      console.log("Removing from watchlist", action.payload);
      // console.log(action.payload.id);
      const newWatchlist = state.watchlist.filter((movie) => movie.id !== action.payload.id);
      return {
        ...state,
        watchlist: newWatchlist,
      };
    default:
      return state;
  }
};
