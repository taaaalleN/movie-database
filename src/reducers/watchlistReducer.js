export const watchlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return [...state, { id: action.movie.id, title: action.movie.title, watchlisted: true }];
    case "REMOVE_FROM_WATCHLIST":
      return state.filter((movie) => movie.id === action.id);
    // case "REMOVE_FROM_WATCHLIST":
    //   return state.filter((movie) => movie.id !== action.id);
    default:
      return state;
  }
};
