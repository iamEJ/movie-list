import { useContext } from "react";
import { MovieContext } from "./../context/movieContext";
import styled from "styled-components";
import { BsBookmarkPlus, BsBookmarkDash } from "react-icons/bs";

function MovieControls({ movie, type }) {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    addMovieBackToWatchlist,
    removeMovieFromWatched,
  } = useContext(MovieContext);
  return (
    <Wrapper>
      {type === "watchlist" && (
        <>
          <button onClick={() => addMovieToWatched(movie)}>
            <BsBookmarkPlus /> Watched
          </button>
          <button onClick={() => removeMovieFromWatchlist(movie.id)}>
            <BsBookmarkDash /> Remove
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button onClick={() => addMovieBackToWatchlist(movie)}>
            <BsBookmarkPlus /> Watchlist
          </button>
          <button onClick={() => removeMovieFromWatched(movie.id)}>
            <BsBookmarkDash /> Remove
          </button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  button {
    margin-right: 10px;
    display: flex;
    background: transparent;
    border: 1px solid transparent;
    color: #02353c;
    font-size: 16px;
    &:hover {
      color: #2eaf7d;
      transition: all 0.3s linear;
      cursor: pointer;
    }
  }
`;

export default MovieControls;
