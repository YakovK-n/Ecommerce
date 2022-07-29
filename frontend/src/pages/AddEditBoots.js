import React, { useState } from "react";
import axios from "axios";


const initialState = {
  name: "",
  image: "",
  price: 0 ,
};

const AddEditBoots = () => {
  const [newBoots, setNewBoots] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBoots({ ...newBoots, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const createBoots = {
      name: newBoots.name,
      image: newBoots.image,
      price: newBoots.price,
    };
    axios.post("http://localhost:4000/newBoots", createBoots);
    console.log(newBoots)
  };

  // const { name, image, price } = newBoots;

  return (
    <div style={{ marginTop: "100px" }}>
      <h1 className="addProductTitle">Add New Boots</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label style={{ margin: "1rem" }}>Name</label>
          <input
            name="name"
            type="text"
            placeholder="name"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label style={{ margin: "1rem" }}>Image</label>
          <input
            name="image"
            type="text"
            placeholder="path"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label style={{ margin: "1rem" }}>Price</label>
          <input
            name="price"
            type="number"
            placeholder="$"
            onChange={handleChange}
          />
        </div>

        {/* <button onClick={handleClick} className="addProductButton">
          Create
        </button> */}
        <button
          onClick={handleClick}
          style={{ width: "50%", borderRadius: "0.5rem", margin: "1rem" }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddEditBoots;
