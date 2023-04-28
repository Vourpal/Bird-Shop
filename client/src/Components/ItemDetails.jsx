import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Stylesheets/itemDetails.css";
import { Outlet } from "react-router-dom";
import Contact from "./Contact";
const ItemDetails = (props) => {
  const [details, setDetails] = useState({});
  const [count, setCount] = useState(0);
  let { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/category/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(details);
  return (
    <div id="background-color">
      <NavBar count={count} />
      <div id="details-flexbox-wrapper">
        <img src={details.image} id="detail-product-image"></img>
        <div id="text-box-wrapper">
          <h2 id="center-title">{details.name}</h2>
          <span>${details.price} + Free Shipping</span>
          <p>
            Occaecat proident nisi sint ad eu. Ut dolore dolore laboris officia
            mollit eiusmod voluptate voluptate duis eiusmod labore. Dolore
            aliqua veniam quis reprehenderit cupidatat anim eiusmod do non est.
            Eu eiusmod esse occaecat elit nulla magna. Exercitation id ad veniam
            pariatur eu consequat consectetur excepteur tempor. Consequat
            ullamco consequat velit ad amet esse eiusmod adipisicing ut irure
            culpa. Elit quis laborum id incididunt nulla.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              value={count}
              onChange={(e) => {
                setCount(e.target.value);
              }}
              type="number"
              required
            ></input>
            <button
              type="submit"
              onClick={() => {
                alert(`The count for the thingy should be ${count}`);
              }}
            >
              Submit me uwu
            </button>
          </form>
          <p>Hellow the number is witawawy: {count}</p>
        </div>
      </div>
      <div>
        <div id="description-wrapper">
          <h3>Description</h3>
          <p>Nostrud laboris nisi duis ipsum anim tempor quis.</p>
        </div>
      </div>
      <Contact/>
      <Outlet/>
    </div>
  );
};

export default ItemDetails;
