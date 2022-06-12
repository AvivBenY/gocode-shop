import React, { useContext } from 'react'
import './Product.css';
import ProductCartContext from "../../Contexts/ProductCartContext"

const Product = ({id, title, price, img})=> {
  const {addToCart} = useContext(ProductCartContext);
  
  return (
    <div className="product-card">
        <div className="product-image">
            <img src={img}/>
        </div>
        <div className="product-info">
            <h5>{title}</h5>
            <h6>{price}</h6>
        </div>
        <div>
          <button>-</button>
          <p></p>
          <button onClick={() => addToCart({id, title, price, img})}>+</button>
        </div>
    </div>
  )
}

export default Product