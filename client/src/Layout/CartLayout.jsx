import ItemList from "../Components/ItemList";
import NavBar from "../Components/NavBar";
import Contact from "../Components/Contact";
import { cartDataContext } from "./RootLayout";
import { useContext } from "react";
import { cartDataDispatchContext } from "./RootLayout";
const CartLayout = () => {
  const tasks = useContext(cartDataContext);
  const dispatch = useContext(cartDataDispatchContext);
  return (
    <div>
      <NavBar />
      {tasks.length === 0 ? (
        <div>Your shopping cart is currently empty</div>
      ) : (
        tasks.map((data) => {
          return (
            <div className="cart-item-wrapper" key={data.name}>
              <h1>{data.count}</h1>
              <div>{data.details.name}</div>
              <div>{data.details.price * data.count}</div>
              <button onClick={() => {
                dispatch({
                  type: "deleted",
                  id: data.details._id,
                });
              }}>Remove</button>
            </div>
          );
        })
      )}
      <Contact />
    </div>
  );
};
export default CartLayout;



//  <img src={data.details.image}></img> 