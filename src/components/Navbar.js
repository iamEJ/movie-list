import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdMovieFilter } from "react-icons/md";
import { HiViewGridAdd } from "react-icons/hi";
import { FaTimes, FaBars } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <MdMovieFilter />
            Movie Watchlist
          </Link>
        </div>
        {/* <div className={click ? "nav-menu active" : "nav-menu"}>
          <Link to="/watchlist">Watchlist</Link>
          <Link to="/watched">Watched</Link>
          <Link to="/add" className="btn">
            Add <HiViewGridAdd />
          </Link>
        </div> */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/watchlist" className="nav-links" onClick={handleClick}>
              Watchlist
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/watched" className="nav-links" onClick={handleClick}>
              Watched
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-links" onClick={handleClick}>
              Add <HiViewGridAdd />
            </Link>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
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

  .nav-menu {
    display: flex;
    list-style: none;
    text-align: center;
    margin-right: 2rem;
  }

  .nav-links {
    display: flex;
    align-items: center;
    color: #02353c;
    text-decoration: none;
    height: 100%;
    padding: 0 16px;
    font-size: 20px;
    border-bottom: 3px solid transparent;
    font-family: "Nunito", sans-serif;
    svg {
      margin-left: 5px;
    }
  }
  .fa-code {
    margin-left: 1rem;
  }

  .nav-item {
    line-height: 40px;
    margin-right: 1rem;
  }

  .nav-item:after {
    content: "";
    display: block;
    height: 3px;
    width: 0;
    background: transparent;
    transition: width 0.7s ease, background-color 0.5s ease;
  }

  .nav-item:hover:after {
    width: 100%;
    background: #3fd0c9;
  }

  .nav-item .active {
    color: #3fd0c9;
    border: 1px solid #3fd0c9;
  }

  .nav-icon {
    display: none;
  }

  @media screen and (max-width: 960px) {
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      border-top: 5px solid #fff;
      border-bottom: 5px solid #fff;
      position: absolute;
      top: 80px;
      left: -110%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-menu.active {
      background: #f1f1f1;
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
    .nav-item .active {
      color: #fff;
      border: none;
    }
    .nav-links {
      padding: 1.5rem;
      width: 100%;
      display: table;
    }

    .nav-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #3fd0c9;
    }
  }
`;

export default Navbar;
