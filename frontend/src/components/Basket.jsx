import React from "react";
import "./Basket.css";

const Basket = (props) => {
  const { cartItems, onAdd, onRemove, countCartItems } = props;
  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

  return (
    <div className="block">
      <h2>
        Cart Items <button className="badge">{countCartItems}</button>
      </h2>
      {cartItems.length === 0 && <div>Your cart is empty</div>}
      {cartItems.map((item) => (
        <div key={item.id} className="row1">
          <div className="col-2">{item.name}</div>
          <div style={{ display: "flex" }}>
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>

          <div className="col-2 text-right">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>

          <div className="row1">
            <div>
              <strong>Total Price</strong>
            </div>
            <div>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div>
            <button
              className="checkout"
              onClick={() => alert("You buy good stuff !")}
            >
              <strong>Checkout</strong>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;
