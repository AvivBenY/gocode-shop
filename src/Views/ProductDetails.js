import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import StatesContext from "../Contexts/StatesContext"
import Cart from '../Components/Cart/Cart';

function ProductDetails() {
  const {id} = useParams();
  const [product, setProduct] = useState({})
  const {checkoutArr, SetCheckoutArr} = useContext(StatesContext);
  const {addToCart} = useContext(StatesContext);
  

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
    console.log("after render product", product);
  }, [])

  console.log("id", id);
  console.log("obj", product.id, product.title, product.price, product.img);

  return (
    <>
    <section id="head" className="head">
      <div className="container">

        <div className="content">
          <div className="text">
            <h2 className="title">{product.title}</h2>
            <p className="description">{product.description}</p>
            <button onClick={() => 
              addToCart({product})}>
            <div className="access">
              <h3>Add To Cart</h3>
              <h4>Get your products instantly</h4>
              <span>
                <i className="fas fa-plus"></i>
              </span>
            </div>
            </button>
          </div>
          <div className="view">
            <div className="img-cont">
              <img src={product.image} alt="" />
            </div>
          </div>
        </div>

      </div>
    </section>
      {checkoutArr.length > 0 && <Cart checkoutLst={checkoutArr} />}
      </>
  )
}

export default ProductDetails