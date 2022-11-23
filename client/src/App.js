import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Home from "./Views/Home";
import ProductDetails from "./Views/ProductDetails";
import StatesContext from "./Contexts/StatesContext";

function App() {
  const [productsArr, setProductsArr] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);
  const [checkoutArr, SetCheckoutArr] = useState([]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => console.log(checkoutArr), [checkoutArr]); //print original array

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((products) => {
        setFilteredArr(products);
        setProductsArr(products);
      });
  }, []);

  function addToCart({ product }) {
    console.log(checkoutArr);
    const isExist = checkoutArr.find((a) => a.id === product.id); // product with qty key
    if (isExist !== undefined) {
      console.log(isExist.qty);

      SetCheckoutArr(
        checkoutArr.map((p) =>
          p.id === isExist.id ? { ...isExist, qty: isExist.qty + 1 } : p
        )
      );
      setFilteredArr(
        filteredArr.map((p) =>
          p.id === isExist.id ? { ...isExist, qty: isExist.qty + 1 } : p
        )
      );
      return;
    }
    setFilteredArr([...filteredArr, { ...product, qty: 1 }]);
    SetCheckoutArr([...checkoutArr, { ...product, qty: 1 }]);
  }

  function removeFromCart(id) {
    console.log("remove clicked");
    const isExist = checkoutArr.find((a) => a.id === id); // product with qty key
    if (isExist.qty >= 2) {
      console.log("removeFromCart");
      SetCheckoutArr(
        checkoutArr.map((p) =>
          p.id === isExist.id ? { ...isExist, qty: isExist.qty - 1 } : p
        )
      );
      setFilteredArr(
        filteredArr.map((p) =>
          p.id === isExist.id ? { ...isExist, qty: isExist.qty - 1 } : p
        )
      );
    } else {
      setFilteredArr(
        filteredArr.map((p) =>
          p.id === isExist.id ? { ...isExist, qty: 0 } : p
        )
      );
      SetCheckoutArr(checkoutArr.filter((product) => product.id !== id));
    }
  }

  return (
    <>
      <StatesContext.Provider
        value={{
          isDrawerOpen: isDrawerOpen,
          setIsDrawerOpen: setIsDrawerOpen,
          productsArr: productsArr,
          setProductsArr: setProductsArr,
          filteredArr: filteredArr,
          setFilteredArr: setFilteredArr,
          checkoutArr: checkoutArr,
          addToCart: addToCart,
          SetCheckoutArr: SetCheckoutArr,
          removeFromCart: removeFromCart,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products/:id"
            element={<ProductDetails checkoutLst={checkoutArr} />}
          />
        </Routes>
      </StatesContext.Provider>
    </>
  );
}

export default App;
