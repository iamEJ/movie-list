import {
  ADD_MOVIE_BACK_TO_WATCHLIST,
  ADD_MOVIE_TO_WATCHED,
  ADD_MOVIE_TO_WATCHLIST,
  REMOVE_MOVIE_FROM_WATCHED,
  REMOVE_MOVIE_FROM_WATCHLIST,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_MOVIE_TO_WATCHLIST:
      return { ...state, watchlist: [action.payload, ...state.watchlist] };
    case REMOVE_MOVIE_FROM_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case ADD_MOVIE_TO_WATCHED:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };
    case ADD_MOVIE_BACK_TO_WATCHLIST:
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };
    case REMOVE_MOVIE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
