import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <h1>Welcome to movie list page!</h1>
      <h3>Search for movies!</h3>
      <h3>Add to your watchlist!</h3>
      <h3>Done watching? Add to watched list.</h3>
      <Link to="/add">
        <span>Start Now </span>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  text-align: center;
  margin-top: 100px;

  h1 {
    color: #3fd0c9;
  }

  h3 {
    color: #02353c;
    margin-top: 10px;
  }

  a {
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 4px;
    background-color: #3fd0c9;
    border: none;
    color: #ffffff;
    text-align: center;
    font-size: 28px;
    padding: 6px 20px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
  }

  a span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  a span:after {
    content: "🎥";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }

  a:hover span {
    padding-right: 50px;
  }

  a:hover span:after {
    opacity: 1;
    right: 0;
  }
`;

export default Home;
