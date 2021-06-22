import { useContext } from "react";
import { MovieContext } from "./../context/movieContext";

function MovieControls({ movie, type }) {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    addMovieBackToWatchlist,
    removeMovieFromWatched,
  } = useContext(MovieContext);
  return (
    <div>
      {type === "watchlist" && (
        <>
          <button onClick={() => addMovieToWatched(movie)}>
            add to watched
          </button>
          <button onClick={() => removeMovieFromWatchlist(movie.id)}>
            remove
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button onClick={() => addMovieBackToWatchlist(movie)}>
            add to watchlist
          </button>
          <button onClick={() => removeMovieFromWatched(movie.id)}>
            remove
          </button>
        </>
      )}
    </div>
  );
}

export default MovieControls;
