import styled from "styled-components";
import MovieControls from "./MovieControls";

function WatchlistCard({ movie, type }) {
  return (
    <Wrapper>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <MovieControls type={type} movie={movie} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: lightgrey;
`;

export default WatchlistCard;
