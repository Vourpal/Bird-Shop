import { useState, useEffect } from "react";

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
      {data.map((list) => (
        <div>
        <p>{list.name}</p>
        <img src={list.image}></img>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

// {data.map((list) => (
//   <p>{list.name}</p>
// ))}
