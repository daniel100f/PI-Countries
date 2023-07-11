import React from "react";
import style from "../styles/Nav.module.css";
import { NavLink } from "react-router-dom";
import Search from "./Search";


const Nav = () => {
  

 

  return (
    <div>
      <div className={style.container}>
        <img
          src="https://cdn.pixabay.com/photo/2016/04/02/21/01/earth-1303628_640.png"
          alt="pokebola"
          className={style.pokebola}
        />

        <div>
          <NavLink to="/HomePage">
            <span className="HomePage">Home</span>
          </NavLink>
        </div>

        <div>
          <NavLink to="/">
            <span className="LandingPage">LandingPage</span>
          </NavLink>
        </div>

        <div>
          <NavLink to="/FormPage">
            <span className="FormPage">Create Activity</span>
          </NavLink>
        </div>

        <Search  />
      </div>
    </div>
  );
};

export default Nav;
