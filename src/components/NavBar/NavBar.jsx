import { NavLink } from "react-router-dom";
import classes from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav id={classes.navbar}>
        <NavLink to="/events">Events</NavLink>
        <NavLink to='/cart'>Cart</NavLink>
        <NavLink to="/logout">Logout</NavLink>
    </nav>
  );
};

export default NavBar;
