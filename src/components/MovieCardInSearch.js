import styled from "styled-components";
import { RiMovie2Line } from "react-icons/ri";
import { useContext } from "react";
import { MovieContext } from "./../context/movieContext";

function MovieCardInSearch({ movie }) {
  const { addMovieToWatchList, watchlist, watched, addMovieToWatched } =
    useContext(MovieContext);

  let storedMovie = watchlist.find((mov) => mov.id === movie.id);
  let movieWatched = watched.find((mov) => mov.id === movie.id);

  const watchlistDisabled = storedMovie ? true : movieWatched ? true : false;
  const watchedDisabled = movieWatched ? true : false;
  return (
    <Wrapper>
      <SearchCard style={watchlistDisabled ? { opacity: 0.6 } : { opacity: 1 }}>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster">
            <RiMovie2Line />
          </div>
        )}
        <div className="info">
          <h1>
            {movie.title}
            <span className="release-date">
              {" "}
              ({movie.release_date ? movie.release_date.substring(0, 4) : "-"})
            </span>
          </h1>
          <p>{movie.overview.substring(0, 100)}...</p>
          <button
            type="button"
            className="btn-hover"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchList(movie)}
          >
            {watchlistDisabled ? "On Your Watchlist" : "Add to Watchlist"}
          </button>
          <button
            type="button"
            className="btn-hover"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            {watchedDisabled ? "On Your Watched" : "Add to Watched"}
          </button>
        </div>
      </SearchCard>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 65%;
  }

  @media (max-width: 900px) {
    width: 75%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const SearchCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-top: 10px;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  // height: 170px;

  img {
    width: 100px;
    height: 150px;
    margin: 10px;
    border-radius: 10px;
    object-fit: cover;
  }
  .filler-poster {
    width: 100px;
    height: 150px;
    margin: 10px;
    border-radius: 10px;
    background: #3fd0c9;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 34px;
      color: #fff;
    }
  }
  h1 {
    font-family: "Nunito", sans-serif;
    color: #02353c;
    padding: 10px 0;
    font-size: 20px;
    span {
      color: #3fd0c9;
    }
    justify-self: start;
  }

  p {
    color: #c5bebe;
    padding-right: 10px;
  }

  button {
    position: relative;
    padding: 10px 15px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    font-size: 18px;
    margin: 1em 0.8em;
  }
  button.btn-hover {
    color: #3fd0c9;
  }
  button.btn-hover.btn-hover::after,
  button.btn-hover.btn-hover::before {
    content: "";
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 2px solid;
    transition: all 0.6s ease;
    border-radius: 2px;
  }
  button.btn-hover.btn-hover::after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: #3fd0c9;
    border-right-color: #3fd0c9;
  }
  button.btn-hover.btn-hover::before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: #3fd0c9;
    border-left-color: #3fd0c9;
  }
  button.btn-hover.btn-hover:hover:after,
  button.btn-hover.btn-hover:hover:before {
    width: 100%;
    height: 100%;
  }

  button:disabled,
  button[disabled] {
    color: #c5bebe;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export default MovieCardInSearch;
