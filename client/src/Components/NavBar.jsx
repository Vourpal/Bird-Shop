import { NavLink, Link } from "react-router-dom";
import "../Stylesheets/NavBar.css";
import logo from "../Stylesheets/Images/image-logo.jpg";
import Cart from "./Cart";

const NavBar = (props) => {
  return (
    <div id="navBar-wrapper">
      <Link to={"/"}>
        <div id="title-wrapper">
          <h1 id="store-name">Chirp</h1>
          <img src={logo} id="logo-image"></img>
        </div>
      </Link>
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
        <NavLink className="store-links" to="/cart">
          Cart <Cart count={props.count}/>
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
