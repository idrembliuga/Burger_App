import React from "react";
import classes from "./ToolBar.css";
import Logo from "../../Logo/Logo";
import NavItems from "../NavigationItems/NavigationItems";

const ToolBar = () => (
  <header className={classes.ToolBar}>
    <div>Menu</div>
    <Logo />
    <nav>
      <NavItems />
    </nav>
  </header>
);

export default ToolBar;
