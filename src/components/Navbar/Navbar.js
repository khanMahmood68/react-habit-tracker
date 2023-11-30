import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={Styles.nav}>
      <h1>Track All Your Habit</h1>
      <div>
        <Link className={Styles.link} to={"/"}>
          Home
        </Link>
        <Link className={Styles.link} to={"/dashboard"}>
          Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
