import { useContext } from "react";
import Header from "../Components/Header/Header";
import Products from "../Components/Products/Products";
import Cart from "../Components/Cart/Cart";
import StatesContext from "../Contexts/StatesContext";

function Home() {
  const { productsArr, setProductsArr } = useContext(StatesContext);
  const { filteredArr, setFilteredArr } = useContext(StatesContext);
  const { checkoutArr, SetCheckoutArr } = useContext(StatesContext);

  const categories = productsArr
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  function filterArray(select) {
    if (select === "all") {
      return setFilteredArr(productsArr);
    }
    return setFilteredArr(
      productsArr.filter((product) => product.category === select)
    );
  }

  function filterPriceArray(min, max) {
    setFilteredArr(
      productsArr.filter((product) => {
        return product.price >= min && product.price <= max;
      })
    );
  }

  function sortByArr(select) {
    console.log(select);
    if (select === "/") {
      setFilteredArr(productsArr);
    }
    if (select === "AZ") {
      setFilteredArr(
        [].concat(filteredArr).sort((a, b) => (a.title < b.title ? -1 : 1))
      );
    }
    if (select === "ZA") {
      setFilteredArr(
        [].concat(filteredArr).sort((a, b) => (b.title < a.title ? -1 : 1))
      );
    }
    if (select === "pricelh") {
      setFilteredArr([].concat(filteredArr).sort((a, b) => b.price - a.price));
    }
    if (select === "pricehl") {
      setFilteredArr([].concat(filteredArr).sort((a, b) => a.price - b.price));
    }
  }

  return (
    <>
      <Header
        props={categories}
        arrFunc={filterArray}
        priceFunc={filterPriceArray}
        checkoutLst={checkoutArr}
        sortFunc={sortByArr}
      />
      <Products productsList={filteredArr} originalProducts={productsArr} />
      {checkoutArr.length > 0 && <Cart checkoutLst={checkoutArr} />}
    </>
  );
}

export default Home;
