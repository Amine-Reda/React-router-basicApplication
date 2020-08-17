import React, { useEffect, useState } from "react";
import "../App.css";

function Item({ match }) {
  const [item, setItem] = useState({});
  const [img, setImg] = useState("");

  const fetchItem = async () => {
    const fetchitems = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const items = await fetchitems.json();
    const data = await items.data.find(
      (elment) => elment.itemId === match.params.id
    );

    setItem(data.item);
    setImg(data.item.images.background);
    console.log(data.item);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={img} />
    </div>
  );
}

export default Item;
