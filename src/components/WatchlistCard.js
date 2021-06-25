import styled from "styled-components";
import MovieControls from "./MovieControls";
import { Link } from "react-router-dom";
import { RiMovie2Line } from "react-icons/ri";

function WatchlistCard({ movie, type }) {
  return (
    <Wrapper>
      <div className="image">
        <div className="circle"></div>
        {movie.vote_average !== 0 ? (
          <span>{movie.vote_average}</span>
        ) : (
          <span>0.0</span>
        )}

        <Link to={`movie/${movie.id}`}>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              title={movie.title}
            />
          ) : (
            <div className="filler-poster">
              <RiMovie2Line />
            </div>
          )}
        </Link>
      </div>

      <MovieControls type={type} movie={movie} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #fff;
  border-radius: 5px;
  width: 240px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  .image {
    a {
      margin: 0 auto;
      margin-top: 20px;
    }
    .circle {
      position: absolute;
      margin-top: 10px;
      margin-left: 10px;
      background: #ffa500;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 5px solid #fff;
    }
    span {
      position: absolute;
      margin-top: 23px;
      font-weight: bold;
      margin-left: 23px;
      color: #fff;
      font-size: 16px;
    }
  }

  .filler-poster {
    width: 200px;
    height: 300px;
    background: #3fd0c9;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 34px;
      color: #fff;
    }
  }
`;

export default WatchlistCard;
