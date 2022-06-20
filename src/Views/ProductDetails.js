import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import StatesContext from "../Contexts/StatesContext"
import MuiDrawer from '../Components/MuiDrawer/MuiDrawer';
import { Button } from '@mui/material';

function ProductDetails({ checkoutLst }) {

  const { id } = useParams();
  const [product, setProduct] = useState({})
  const { addToCart } = useContext(StatesContext);


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
    console.log("after render product", product);
  }, [])

  return (
    <>

      <div className="product-details-card">
        <div className="badge">Hot</div>
        <div className="product-tumb">
          <div className="img-cont">
            <img src={product.image} alt="" />
          </div>
        </div>
        <div className="product-description">
          <span className="product-catagory">{product.category}</span>
          <h4>{product.title}</h4>
          <br />
          <p>{product.description}</p>
          <div className="product-bottom-details">
            <div className="product-price"><small>{product.price + 75}$</small> {product.price}$</div>
            <div className="product-links">
              <Button onClick={() => addToCart({ product })}/>
              <MuiDrawer checkoutLst={checkoutLst} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductDetails

