import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar"
import { Outlet } from "react-router-dom";

const ItemList = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/${props.site}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.log(err);
      });
  }, [props.site]);
  console.log(data, "is it empty or not");
  return (
    <div>
      <header>
        <NavBar />
      </header>
      {data.map((list) => (
        <div>
          <p>{list.name}</p>
          <img src={list.image}></img>
        </div>
      ))}
      <Outlet />
    </div>
  );
};

export default ItemList;

// {data.map((list) => (
//   <p>{list.name}</p>
// ))}
