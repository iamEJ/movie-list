import { useState } from "react";
import styled from "styled-components";

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
      <div className="container">
        <input
          type="text"
          placeholder="Enter movie name"
          value={query}
          onChange={onChange}
        />
        {movies.length > 0 &&
          movies.map((movie) => {
            return <p>{movie.title}</p>;
          })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1170px;
`;

export default AddMovie;
