import React from 'react'
import Item from './Item';
import data from '../data';

const Main = (props) => {
    const {products} = data;
  return (
    <main style={{marginTop: "80px"}}>
        {/* <h2>Products</h2> */}
        <div style={{display: "flex", marginLeft: "50px"}}>
        {products.map((product) => (
          <Item key={product.id} product={product} products={products}></Item>
          ))}
      </div>
    </main>

  )
}

export default Main