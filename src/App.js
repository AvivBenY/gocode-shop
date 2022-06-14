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



/*
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import ProductCartContext from "./Contexts/ProductCartContext"

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


  const categories = productsArr
    .map(p => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);


  function filterArray(select) {
    if (select === "all") {
      return setFilteredArr(productsArr);
    }
    return setFilteredArr(productsArr.filter((product) => product.category === select))
  }

  function addToCart(product) {
    
    SetCheckoutArr(checkoutArr => [...checkoutArr, product]);
  }

  function removeFromCart(id) {
    const newCheckout = checkoutArr.filter((product) => product.id !== id);
    SetCheckoutArr(newCheckout);
  }

  return (
    <>
      <ProductCartContext.Provider value={{ addToCart: addToCart, removeFromCart: removeFromCart }}>
        <Header props={categories} arrFunc={filterArray} />
        <Products productsList={filteredArr} />
        {checkoutArr.length > 0 && <Cart checkoutLst={checkoutArr} />}
      </ProductCartContext.Provider>
    </>
  );
}

export default App;
 */