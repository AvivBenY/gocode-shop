import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import StatesContext from "../Contexts/StatesContext";
import MuiDrawer from "../Components/MuiDrawer/MuiDrawer";
import { Button } from "@mui/material";

function ProductDetails({ checkoutLst }) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { addToCart } = useContext(StatesContext);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
    console.log("after render product", product);
  }, []);

  return (
    <div className="product-details-card">
      <div className="icons">
        <Link className="product-details" to={`/`}>
          <svg
            className="arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
          </svg>
        </Link>
        <div className="badge">Hot</div>
      </div>
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
          <div className="product-price">
            <small>{product.price + 75}$</small> {product.price}$
          </div>
          <div className="product-links">
            <Button onClick={() => addToCart({ product })} />
            <MuiDrawer checkoutLst={checkoutLst} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
