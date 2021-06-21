import { useState } from "react";
import styled from "styled-components";
import MovieCardInSearch from "./MovieCardInSearch";
import { BiSearchAlt } from "react-icons/bi";
import { FaTheaterMasks } from "react-icons/fa";

function AddMovie() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.errors) {
          setMovies(data.results);
        } else {
          setMovies([]);
        }
      });
  };

  console.log(movies);

  return (
    <Wrapper>
      <h1 className="search-title">
        Search a movie to add to your watchlist here!
      </h1>
      <div className="container">
        <div className="input-box">
          <input
            type="text"
            placeholder="batman"
            value={query}
            onChange={onChange}
          />
          <button>
            <BiSearchAlt />
          </button>
        </div>
        {movies.length > 0 &&
          movies.map((movie) => {
            return <MovieCardInSearch key={movie.id} movie={movie} />;
          })}
      </div>
      <div className="masks">
        <FaTheaterMasks />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  .container {
    width: 90%;
  }

  .search-title {
    color: #3fd0c9;
    padding: 20px;
    font-family: "Nunito", sans-serif;
    font-size: 32px;
    text-align: center;
  }

  .input-box {
    display: flex;
    width: 50%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;

    input {
      width: 100%;
      height: 42px;
      font-size: 26px;
      padding-left: 10px;
      border: 1px solid lightgrey;
      border-radius: 5px;
      color: #02353c;
    }

    button {
      width: 36px;
      height: 36px;
      background: #3fd0c9;
      margin-left: -40px;
      border: none;
      border-radius: 5px;
      svg {
        font-size: 24px;
        color: #fff;
      }
    }
  }

  .masks {
    color: #efefef;
    font-size: 140px;
    margin-top: 40px;
  }
  @media (max-width: 1200px) {
    .input-box {
      width: 65%;
    }
  }

  @media (max-width: 900px) {
    .input-box {
      width: 75%;
    }
  }

  @media (max-width: 600px) {
    .input-box {
      width: 90%;
    }
  }
`;

export default AddMovie;
