import React from "react";
//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
            {/* Link component instead of standard anchor tag - browserrouter will listen to click on these links, prevent default of sending new GET request, and mnually update the url so it looks like we update the page, and
            re-render*/}
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
