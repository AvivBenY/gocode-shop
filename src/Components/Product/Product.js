import React, { useContext } from 'react'
import './Product.css';
import StatesContext from "../../Contexts/StatesContext"
import { Link } from "react-router-dom";

const Product = ({id, title, price, img})=> {
  const {addToCart} = useContext(StatesContext);
  const product = {id, title, price, img};
  return (    
    <div className="product-card">
      <Link className="product-card" to={`/products/${id}`}>
        <div className="product-image">
            <img src={img}/>
        </div>
        <div className="product-info">
            <h5>{title}</h5>
            <h6>{price}</h6>
        </div>
        </Link>
        <div>
          <button>-</button>
          <p></p>
          <button onClick={() => addToCart({product})}>+</button>
        </div>
    </div>
  )
}

export default Product