import React from 'react'

const Item = (props) => {
  const { product, onAdd } = props;

  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
      <button className='add_to_cart' onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  )
}

export default Item