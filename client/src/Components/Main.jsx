import React, { useState } from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Netflixlogo from "../../src/images/Netflixlogo.jpg";
const Main = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const searchHandler = (e) => {
    e.preventDefault();

    fetch(`https://www.omdbapi.com/?s=${search}&apikey=62e54a34`)
      .then((res) => res.json())
      .then((value) => setData(value.Search));
  };

  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark   header">
        <Link to="/">
        {" "}
          <img className="header__icon" src={Netflixlogo} alt="img"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav headerLeft ">
            <li className="nav-item active">
              <Link to="/movies/popular" style={{ textDecoration: "none" }}>
                <span>Popular</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
                <span>Top Rated</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
                <span>Upcoming</span>
              </Link>
            </li>
          </ul>
        </div>
        <form class="d-flex" role="search" onSubmit={searchHandler}>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </nav>
      <div className="row">
        {data.map((movie) => (
          <div className="col-md-3">
            <div class="cards" style={{ width: "18rem" }}>
              <img src={movie.Poster} class="card-img-top" alt={movie.Title} />
              <div class="cards__overlay">
                <h5 class="card__title">{movie.Title}</h5>\
                <div className="card__rating">{movie.imdbID}</div>
                <div className="card__runtime">{movie.Year}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
