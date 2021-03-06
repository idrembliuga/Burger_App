import React from "react";
import Toolbar from "../Navigation/ToolBar/ToolBar";
import Aux from "../../hoc/Main_Div";
import classes from "./Layout.css";

const layout = props => (
  <Aux>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
