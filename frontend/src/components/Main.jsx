import React from "react";
import Item from "./Item";
import data from "../data";
import Basket from "./Basket";
import { useState } from "react";

const Main = (props) => {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <main style={{ marginTop: "80px" }}>
      <div style={{display: "flex", flexWrap: "wrap"}} >
      <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "50px" }}>
        {products.map((product) => (
          <Item key={product.id} product={product} products={products} onAdd={onAdd}></Item>
        ))}
      </div>
      <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          countCartItems={cartItems.length}
        ></Basket>
      </div>
    </main>
  );
};

export default Main;
