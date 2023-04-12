import { NavLink } from "react-router-dom";
import "../Stylesheets/NavBar.css";

const NavBar = () => {
  return (
    <div id="navBar-wrapper">
      <h1 id="store-name">Chirp</h1>
      <nav className="store-links-wrapper">
        <NavLink className="store-links" to="/pets">
          Pets
        </NavLink>
        <NavLink className="store-links" to="/cages">
          Cages
        </NavLink>
        <NavLink className="store-links" to="/food">
          Food
        </NavLink>
        <NavLink className="store-links" to="/toys">
          Toys
        </NavLink>
        <NavLink className="store-links" to="/cart">
          Cart
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
