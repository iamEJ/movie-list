import { useContext } from "react";
import styled from "styled-components";
import { MovieContext } from "./../context/movieContext";
import WatchlistCard from "./WatchlistCard";
import { BsFillBookmarksFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Watchlist() {
  const { watchlist } = useContext(MovieContext);

  return (
    <Wrapper>
      <div className="movies-length">
        <BsFillBookmarksFill />
        {watchlist.length}
      </div>
      {watchlist.length > 0 ? (
        <div>
          {watchlist.map((movie) => {
            return (
              <WatchlistCard movie={movie} key={movie.id} type="watchlist" />
            );
          })}
        </div>
      ) : (
        <h1>
          No movies on your watchlist. Add some <Link to="/add">here</Link>
        </h1>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 50px 100px;

  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }

  .movies-length {
    svg {
      margin-right: -5px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3fd0c9;
    font-size: 50px;
    bottom: 10px;
    right: 10px;
    position: fixed;
  }

  h1 {
    color: #02353c;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #3fd0c9;
    &:hover {
      color: #2eaf7d;
    }
  }
`;

export default Watchlist;
