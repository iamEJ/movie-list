import { useContext } from "react";
import styled from "styled-components";
import { MovieContext } from "./../context/movieContext";
import WatchlistCard from "./WatchlistCard";

function Watchlist() {
  const { watchlist } = useContext(MovieContext);

  return (
    <Wrapper>
      <h1>Movies:{watchlist.length}</h1>
      {watchlist.length > 0 ? (
        <div>
          {watchlist.map((movie) => {
            return (
              <WatchlistCard movie={movie} key={movie.id} type="watchlist" />
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

export default Watchlist;
