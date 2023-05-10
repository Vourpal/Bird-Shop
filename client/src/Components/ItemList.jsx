import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import { Outlet, Link } from "react-router-dom";
import "../Stylesheets/ItemList.css";
import Contact from "./Contact";

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
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main id="grid-item-wrapper">
        {data.map((list) => (
          <div className="individual-item-wrapper" key={list._id}>
            <img className="image-resizing" src={list.image}></img>
            <div>{list.category}</div>
            <Link to={`/category/${props.details}/details/${list.name}`}>
              {list.name}
            </Link>
            <div>{list.price}</div>
          </div>
        ))}
      </main>
      <Contact />
      <Outlet />
    </div>
  );
};

export default ItemList;

// {data.map((list) => (
//   <p>{list.name}</p>
// ))}
