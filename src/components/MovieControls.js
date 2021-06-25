import { useContext } from "react";
import { MovieContext } from "./../context/movieContext";
import { Link } from "react-router-dom";

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
          <Link to={`movie/${movie.id}`}>More</Link>
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
          <Link to={`movie/${movie.id}`}>More</Link>
        </>
      )}
    </div>
  );
}

export default MovieControls;
