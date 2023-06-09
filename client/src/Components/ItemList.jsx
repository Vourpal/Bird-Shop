import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import { Outlet, Link } from "react-router-dom";
import "../Stylesheets/ItemList.css";
import Contact from "./Contact";

const ItemList = (props) => {
  const [data, setData] = useState([]);

  let capatalizeName = (string) => {
    const capatalized = string.charAt(0).toUpperCase() + string.slice(1);
    console.log(capatalized);
    return capatalized;
  };
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
          <Link
            to={`/category/${props.details}/details/${list.name}`}
            className="individual-item-wrapper"
            key={list._id}
          >
              <img className="image-resizing" src={list.image}></img>
              <div className="category-name">
                {capatalizeName(list.category)}
              </div>
              <div className="link-name">{list.name}</div>
              <div>{`$${list.price}`}</div>
          </Link>
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
