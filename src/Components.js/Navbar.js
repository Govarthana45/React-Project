import React from "react";
import royal from "../Assets/Royal Enfield India.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid  d-flex navbar justify-content-between pt-3 pb-3 ps-4 pe-5 ">
      <img className="navbar" src={royal} />
      <ul className="nav navbar text-light fw-bold d-flex p-3">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="bike">
          <li>Motorcycles</li>
        </Link>
        <Link to="heart">
          <li>Favourites</li>
        </Link>
        <Link to="about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
