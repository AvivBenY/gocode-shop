import { useEffect, useState, useContext } from 'react';
import Header from '../Components/Header/Header';
import Products from '../Components/Products/Products';
import Cart from '../Components/Cart/Cart';
// import ProductCartContext from "../Contexts/ProductCartContext"
import StatesContext from "../Contexts/StatesContext"

 function Home() {
    const {productsArr, setProductsArr} = useContext(StatesContext);
    const {filteredArr, setFilteredArr} = useContext(StatesContext);
    const {checkoutArr, SetCheckoutArr} = useContext(StatesContext);


   

    const categories = productsArr
        .map(p => p.category)
        .filter((value, index, array) => array.indexOf(value) === index);


        function filterArray(select) {
            if (select === "all") {
              return setFilteredArr(productsArr);
            }
            return setFilteredArr(productsArr.filter((product) => product.category === select))
          }

          
          
    return (
        <>
            <Header props={categories} arrFunc={filterArray} />
            <Products productsList={filteredArr} />
            {checkoutArr.length > 0 && <Cart checkoutLst={checkoutArr} />}
        </>
    )
}   

export default Home