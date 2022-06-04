import React from 'react'
import './Product.css';

const Product = ({key,title, price, img})=> {
  console.log("title", title);
  return (
    <div className="product-card">
        <div className="product-image">
            <img src={img}/>
        </div>
        <div className="product-info">
            <h5>{title}</h5>
            <h6>{price}</h6>
        </div>
    </div>
  )
}

export default Product