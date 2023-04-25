import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ItemDetails = (props) => {
  const [details, setDetails] = useState({});
  let { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/category/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(details)
  return (
    <div>
      <NavBar />
      <p>I'm a goofy Goober Ya</p>
      <p>{details.name}</p>
    </div>
  );
};

export default ItemDetails;
