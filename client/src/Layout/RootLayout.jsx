import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import "../Stylesheets/RootLayout.css";
import img from "../Stylesheets/Images/bird-photo.jpg";
import Contact from "../Components/Contact";
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
      <Contact />
      <Outlet />
    </div>
  );
};
export default RootLayout;
