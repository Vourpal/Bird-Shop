import { NavLink, Link } from "react-router-dom";
import "../Stylesheets/NavBar.css";
import logo from "../Stylesheets/Images/image-logo.jpg";
import Cart from "./Cart";
import { useContext } from "react";
import { cartDataContext } from "../Layout/RootLayout";

const NavBar = (props) => {
  const tasks = useContext(cartDataContext);
  let cartCount = tasks.reduce((a, b) => {
    return a + parseInt(b.count);
  }, 0);
  return (
    <div id="navBar-wrapper">
      <div id="title-wrapper">
        <Link to={"/"}>
          <img src={logo} id="logo-image"></img>
          <h1 id="store-name">Chirp</h1>
        </Link>
      </div>

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
        <NavLink className="store-links" to="/cart" id="position-relative-count-tracker">
          Cart <span id="count-tracker">{cartCount === 0 ? null : cartCount}</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
