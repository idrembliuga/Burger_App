import React from "react";
import classes from "./NavigationItems.css";
import NavItem from "./NavigationItem/NavigationItem";
const NavigationItems = () => (
  <div className={classes.NavigationItems}>
    <ul>
      <NavItem style={"float:left"} link="/" active>
        Burger Builder
      </NavItem>
      <NavItem style={"float:right"} link="/">
        Checkout
      </NavItem>
    </ul>
  </div>
);
export default NavigationItems;
