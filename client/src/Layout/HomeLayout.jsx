import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import "../Stylesheets/RootLayout.css";
import img from "../Stylesheets/Images/bird-photo.jpg";
import Contact from "../Components/Contact";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const HomeLayout = () => {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/random")
      .then((res) => res.json())
      .then((data) => setRandom(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const randomLink = (site) => {
    if (site === "bird") {
      return "pets";
    } else if (site === "cage") {
      return "cages";
    } else {
      return site;
    }
  };
  console.log("I fired once :)", random);
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <div id="opening-wrapper">
          <img src={img} id="opening-image"></img>
          <div id="opening-text-wrapper">
            <span id="opening-title-text">Hand-Raised Birds!</span>
            <h1>Join the Bird Family!</h1>
            <span id="opening-title-paragraph">
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
        <h2 id="third-section-title">Best Selling Product</h2>
        <div id="random-list-item-wrapper">
          {random.map((randomList) => (
            <div className="random-list-item">
              <img
                src={randomList.image}
                className="random-image-resizing"
              ></img>
              <div>{randomList.category}</div>
              <Link
                to={`/category/${randomLink(randomList.category)}/details/${
                  randomList.name
                }`}
              >
                {randomList.name}
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Contact />
      <Outlet />
    </div>
  );
};
export default HomeLayout;

// {random.map((list) => {
//   <div>
//   <img src={list.image}></img>
//   <div>{list.category}</div>
//   <span>{list.name}</span>
//   <div>{list.price}</div>
// </div>
// })}

// async function fetchData() {
//   try {
//     const response = await fetch("http://localhost:3000/random");
//     const json = await response.json();
//     setRandom(json);
//   } catch (e) {
//     console.error(e);
//   }
// }
// fetchData();
// console.log("Is this working", random)
