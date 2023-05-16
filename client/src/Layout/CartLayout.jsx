import ItemList from "../Components/ItemList";
import NavBar from "../Components/NavBar";
import Contact from "../Components/Contact";
import { cartDataContext } from "./RootLayout";
import { useContext } from "react";
import { cartDataDispatchContext } from "./RootLayout";
import "../Stylesheets/CartLayout.css";
const CartLayout = () => {
  const tasks = useContext(cartDataContext);
  const dispatch = useContext(cartDataDispatchContext);
  return (
    <div>
      <NavBar />
      <div id="cart-wrapper">
        {tasks.length === 0 ? (
          <h2 id="cart-empty">Your shopping cart is currently empty</h2>
        ) : (
          tasks.map((data) => {
            return (
              <div className="cart-item-wrapper" key={data.name}>
                <h1>{data.count}</h1>
                <div>{data.details.name}</div>
                <div>{data.details.price * data.count}</div>
                <button
                  onClick={() => {
                    dispatch({
                      type: "deleted",
                      id: data.details._id,
                    });
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })
        )}
      </div>

      <div id="contact-wrapper">
        <Contact />
      </div>
    </div>
  );
};
export default CartLayout;

//  <img src={data.details.image}></img>
