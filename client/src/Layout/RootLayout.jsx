import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import "../Stylesheets/RootLayout.css";
import img from "../Stylesheets/Images/bird-photo.jpg";
import logo from "../Stylesheets/Images/Milliet chirp (1).png";

const RootLayout = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <div id="opening-wrapper">
          <img src={img} id="opening-image"></img>
          <div id="opening-text-wrapper">
            <span>Highest Quality Birds!</span>
            <h1>Join the Bird Family!</h1>
            <span>
              Duis consequat minim est deserunt Lorem incididunt officia. Ut
              exercitation enim magna exercitation eu laborum Lorem elit dolor
              consequat veniam fugiat exercitation. Anim minim incididunt est
            </span>
          </div>
        </div>
        <div id="information-wrapper">
          <div className="information-class">Free Shipping</div>
          <div className="information-class">Huge Savings</div>
          <div className="information-class">Pedigree Guaranteed</div>
          <div className="information-class">One Stop Shop</div>
        </div>
        <div>
          <h2 id="third-section-title">Best Selling Product</h2>
        </div>
      </main>
      <footer>
        <div id="footer-grid-wrapper">
          <div id="span-2-div">
            <span id="logo-image-wrapper">
              <h3>Chirp</h3>
              <img src={logo} id="footer-logo-image"></img>
            </span>
            Irure adipisicing sint eiusmod proident amet ea non velit voluptate
            irure pariatur et amet enim. Officia sunt nostrud tempor non laborum
            exercitation enim esse consequat. Exercitation cupidatat labore
            culpa aute nulla minim sunt ullamco Lorem deserunt cupidatat
            pariat.
          </div>
          <div>
            <h3>Quick links</h3>
            <ul>
              <li>About</li>
              <li>Cart</li>
              <li>Checkout</li>
              <li>Contact</li>
              <li>Home</li>
              <li>My Account</li>
              <li>Shop</li>
            </ul>
          </div>
          <div>
            <h3>Site links</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Shipping Details</li>
              <li>Offer Coupons</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h3>Download Our Mobile App</h3>
            Minim nisi amet est laborum anim ullamco nulla anim quis.
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>Know More About Us</li>
              <li>Visit Store</li>
              <li>Let's Connect</li>
              <li>Locate Stores</li>
            </ul>
          </div>
        </div>
      </footer>
      <Outlet />
    </div>
  );
};
export default RootLayout;
