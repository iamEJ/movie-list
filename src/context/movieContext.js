import { createContext, useReducer, useEffect } from "react";
import reducer from "./movieReducer";
import {
  ADD_MOVIE_BACK_TO_WATCHLIST,
  ADD_MOVIE_TO_WATCHED,
  ADD_MOVIE_TO_WATCHLIST,
  REMOVE_MOVIE_FROM_WATCHED,
  REMOVE_MOVIE_FROM_WATCHLIST,
} from "./actions";

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const MovieContext = createContext(initialState);

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addMovieToWatchList = (movie) => {
    dispatch({ type: ADD_MOVIE_TO_WATCHLIST, payload: movie });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: ADD_MOVIE_TO_WATCHED, payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: REMOVE_MOVIE_FROM_WATCHLIST, payload: id });
  };

  const removeMovieFromWatched = (id) => {
    dispatch({ type: REMOVE_MOVIE_FROM_WATCHED, payload: id });
  };

  const addMovieBackToWatchlist = (movie) => {
    dispatch({ type: ADD_MOVIE_BACK_TO_WATCHLIST, payload: movie });
  };

  return (
    <MovieContext.Provider
      value={{
        ...state,
        addMovieToWatchList,
        removeMovieFromWatchlist,
        addMovieToWatched,
        removeMovieFromWatched,
        addMovieBackToWatchlist,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
