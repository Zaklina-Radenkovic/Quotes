import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/Quotes" className={classes.logo}>
        <div>Great Quotes</div>
      </NavLink>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/Quotes" activeClassName={classes.active}>
              All quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              Add a quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
