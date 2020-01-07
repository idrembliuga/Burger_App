import React from "react";
import logo from "../../Assets/images/burger-logo.png";
import classes from "./Logo.css";
const Logo = () => (
  <div className={classes.Logo}>
    <img src={logo} alt="logo" />
  </div>
);

export default Logo;
