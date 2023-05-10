import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext, useReducer } from "react";
import "../Stylesheets/itemDetails.css";
import { Outlet } from "react-router-dom";
import Contact from "./Contact";
import { cartDataContext } from "../Layout/RootLayout";
import { cartDataDispatchContext } from "../Layout/RootLayout";

const ItemDetails = () => {
  const tasks = useContext(cartDataContext);
  const dispatch = useContext(cartDataDispatchContext);

  const [details, setDetails] = useState({});
  const [count, setCount] = useState(0);
  let { id } = useParams();
  const valueExists = tasks.some((data) => data.details._id === details._id);

  useEffect(() => {
    fetch(`http://localhost:3000/category/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("outside of function", tasks);

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
                if (valueExists) {
                  let updateIndex = tasks.findIndex(
                    (obj) => obj.details._id === details._id
                  );
                  tasks[updateIndex].count = count;
                } else {
                  dispatch({
                    type: "updated",
                    details: details,
                    count: count,
                  });
                }
              }}
            >
              {valueExists ? "Edit" : "Add to Cart"}
            </button>
          </form>
        </div>
      </div>
      <div>
        <div id="description-wrapper">
          <h3>Description</h3>
          <p>Nostrud laboris nisi duis ipsum anim tempor quis.</p>
        </div>
      </div>
      <Contact />
      <Outlet />
    </div>
  );
};

export default ItemDetails;

// i want to make an array of objects with the information provided from the itemDetails when i submit "add to car"
// ok it probably has something to do with the fact that i am doing cart.push a second time and the whole thing breaks.

// Object.assign({}, {details, count})

// setCartCount(count)
// setCart(cart.push({details, count}))
// console.log(cart)
