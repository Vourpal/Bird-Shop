import { useContext, createContext } from "react";
import { Outlet } from "react-router-dom";

const cartData = createContext([]);
const ShoppingLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default ShoppingLayout