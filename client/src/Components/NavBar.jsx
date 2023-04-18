import { NavLink } from "react-router-dom";
import "../Stylesheets/NavBar.css";

const NavBar = () => {
  return (
    <div id="navBar-wrapper">
      <a href="http://127.0.0.1:5173/">
        <h1 id="store-name">Chirp</h1>
      </a>
      <nav className="store-links-wrapper">
        <NavLink className="store-links" to="/category/pets">
          Pets
        </NavLink>
        <NavLink className="store-links" to="/category/cages">
          Cages
        </NavLink>
        <NavLink className="store-links" to="/category/food">
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
