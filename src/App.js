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
    const isExist = checkoutArr.filter((p) => {
      return p.id === product.id
    })
    if (isExist.length > 0) {
      SetCheckoutArr(checkoutArr.filter((a) => a.id !== product.id))
      product.cnt = isExist.length + 1;
    }else{product.cnt = 0}
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
