import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <nav id="navbar">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/logout">Logout</NavLink>
    </nav>
  );
};

export default NavBar;
