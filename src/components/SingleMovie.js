import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FaImdb, FaStar } from "react-icons/fa";
import { RiMovie2Line } from "react-icons/ri";

function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  useEffect(() => {
    getSingleMovieInfo();
    // eslint-disable-next-line
  }, []);

  const getSingleMovieInfo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    const data = await response.json();
    setMovie(data);
  };

  return (
    <Wrapper>
      <div className="movie-card">
        <header>
          <div className="title">
            {movie.title && <h1>{movie.title}</h1>}

            {movie.vote_average !== 0 && (
              <p>
                <span>
                  <FaStar />
                  {movie.vote_average}
                </span>{" "}
                / 10{" "}
              </p>
            )}
          </div>
          <div className="genres">
            {movie.genres &&
              movie.genres.map((genre) => {
                return <h4 key={genre.id}> {genre.name}</h4>;
              })}
          </div>
        </header>
        <div className="card-body">
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
          <div className="card-info">
            <h3>About the movie:</h3>
            {movie.overview && <p>{movie.overview}</p>}

            <div className="details">
              {movie.release_date && (
                <p>
                  Release Date: <span>{movie.release_date}</span>
                </p>
              )}
              {movie.runtime && (
                <p>
                  Runtime: <span>{movie.runtime} min</span>
                </p>
              )}
              {movie.vote_average !== 0 && (
                <p>
                  Rating:{" "}
                  <span>
                    {movie.vote_average} ({movie.vote_count || 0})
                  </span>
                </p>
              )}
              {movie.original_language && (
                <p>
                  Language: <span>{movie.original_language}</span>
                </p>
              )}
              {movie.imdb_id && (
                <div className="imdb">
                  More Info:
                  <a href={`https://www.imdb.com/title/${movie.imdb_id}/`}>
                    <FaImdb />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;

  .movie-card {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    background: #fff;
    border-radius: 5px;
    width: 70%;
    margin-top: 50px;
    padding: 30px 40px;
    margin-bottom: 20px;
  }

  header {
    margin-bottom: 30px;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: #02353c;
      font-size: 30px;
    }
    p {
      color: #b1b2b5;
      font-size: 20px;
      span {
        color: #3fd0c9;
        font-weight: bold;
        svg {
          font-size: 16px;
        }
      }
    }
  }

  .genres {
    h4 {
      display: inline-block;
      font-size: 14px;
      font-weight: 500;
      color: #3fd0c9;
    }

    h4 + h4::before {
      display: inline-block;
      white-space: pre;
      content: " & ";
    }
  }

  .card-body {
    display: flex;
  }

  .card-info {
    padding: 0 20px;
    color: #02353c;
    p {
      margin-top: 10px;
      color: #999;
    }
  }
  .details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    p {
      font-weight: bold;
      color: #02353c;

      span {
        color: #3fd0c9;
        font-weight: 500;
      }
    }
  }
  .imdb {
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #02353c;
    a {
      margin-left: 5px;
      color: #3fd0c9;
      font-size: 30px;
      &:hover {
        color: #2eaf7d;
        transition: all 0.2s linear;
      }
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

  @media (max-width: 1150px) {
    .movie-card {
      width: 80%;
    }
  }
  @media (max-width: 850px) {
    .card-body {
      flex-direction: column;
      img {
        width: 200px;
        margin-left: 20px;
        margin-bottom: 20px;
      }
    }

    .title {
      flex-direction: column;
      align-items: start;
    }
    .details {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;

export default SingleMovie;
