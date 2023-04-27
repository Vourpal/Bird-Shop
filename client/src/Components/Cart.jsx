import { useEffect, useState } from "react";

const Cart = (props) => {
    const [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(props.count)
    },[props.count])
  return <div> {total}</div>;
};
export default Cart;
