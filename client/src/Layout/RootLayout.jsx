import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import "../Stylesheets/RootLayout.css";
import img from "../Stylesheets/Images/bird-photo.jpg";

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
        Contact shit
        <div id="footer-grid-wrapper">
          <div id="span-2-div">
            Chirp Dolor deserunt eu laboris fugiat occaecat sunt Lorem voluptate
            magna adipisicing laboris commodo.
          </div>
          <div>
            Quick links
            <ul>
              <li>Abbout</li>
              <li>Cart</li>
              <li>Checkout</li>
              <li>Contact</li>
              <li>Home</li>
              <li>My Account</li>
              <li>Shop</li>
            </ul>
          </div>
          <div>
            Site links
            <ul>
              <li>Privacy Policy</li>
              <li>Shipping Details</li>
              <li>Offer Coupons</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <span>Download Our Mobile App</span>
            Minim nisi amet est laborum anim ullamco nulla anim quis.
          </div>
          <div>
            Quick Links
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
