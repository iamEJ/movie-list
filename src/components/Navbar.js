import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdMovieFilter } from "react-icons/md";
import { HiViewGridAdd } from "react-icons/hi";

function Navbar() {
  return (
    <Header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <MdMovieFilter />
            Movie Watchlist
          </Link>
        </div>
        <div className="list-links">
          <Link to="/watchlist">Watchlist</Link>
          <Link to="/watched">Watched</Link>
          <Link to="/add" className="btn">
            Add <HiViewGridAdd />
          </Link>
        </div>
      </div>
    </Header>
  );
}

const Header = styled.header`
  max-width: 1170px;
  margin: 0 auto;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .logo a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #02353c;
    font-size: 20px;
    font-family: "Nunito", sans-serif;
    svg {
      color: #fff;
      font-size: 40px;
      background-color: #3fd0c9;
      border-radius: 5px;
      margin: 10px;
    }
  }

  .list-links {
    margin-right: 100px;
    display: flex;
    align-items: center;
  }

  .list-links a {
    padding: 0 20px;
    color: #02353c;
    text-decoration: none;
    font-size: 22px;
    font-family: "Nunito", sans-serif;
    &:hover {
      color: #2eaf7d;
      transition: all 0.2s linear;
    }
  }

  .btn {
    display: flex;
    align-items: center;
    svg {
      margin-left: 5px;
    }
  }
`;

export default Navbar;
