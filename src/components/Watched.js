import { useContext } from "react";
import styled from "styled-components";
import { MovieContext } from "./../context/movieContext";
import WatchlistCard from "./WatchlistCard";

function Watched() {
  const { watched } = useContext(MovieContext);
  return (
    <Wrapper>
      <h1>Movies:{watched.length}</h1>
      {watched.length > 0 ? (
        <div>
          {watched.map((movie) => {
            return (
              <WatchlistCard movie={movie} key={movie.id} type="watched" />
            );
          })}
        </div>
      ) : (
        <p>no movies</p>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 50px 100px;

  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1em;
  }
`;

export default Watched;
