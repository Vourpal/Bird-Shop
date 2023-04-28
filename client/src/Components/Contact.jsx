import "../Stylesheets/Contact.css"
import logo from "../Stylesheets/Images/Milliet chirp (1).png";

const Contact = () => {
  return(
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
  )
}

export default Contact