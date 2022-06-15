import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import Home from "./Views/Home"
import ProductDetails from "./Views/ProductDetails"
import StatesContext from './Contexts/StatesContext'

function App() {
  const [productsArr, setProductsArr] = useState([]);
    const [filteredArr, setFilteredArr] = useState([]);
    const [checkoutArr, SetCheckoutArr] = useState([]);
   

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((products) => {
              setFilteredArr(products)
              setProductsArr(products)
          });
  }, [])

  
  function addToCart({product}) {
    
    console.log("product", product);
    SetCheckoutArr([...checkoutArr, product]);
  }

  function removeFromCart(id) {
    const newCheckout = checkoutArr.filter((product) => product.id !== id);
    SetCheckoutArr(newCheckout);
  }

  return (
    <>
    <StatesContext.Provider 
        value={{productsArr:productsArr, setProductsArr:setProductsArr, 
        filteredArr:filteredArr, setFilteredArr:setFilteredArr,checkoutArr:checkoutArr,
        addToCart: addToCart, SetCheckoutArr:SetCheckoutArr, removeFromCart: removeFromCart }}>
      <Routes>
      <Route path="/" element={<Home />} />      
      <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      </StatesContext.Provider>
    </>
  );
}

export default App;


