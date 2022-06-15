
import { Slider } from '@mui/material';
import { useState } from 'react';
import './Header.css';

function Header({ props, arrFunc, priceFunc }) {
  function valuetext(value) {
    return `${value}°C`;
  }
  const [value, setValue] = useState([0, 6000]);
  const min = value[0];
  const max = value[1];
  console.log("minmax", min, max);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    priceFunc(min,max);
  }


  return (
    <nav className="product-filter">
      
      <h1>Jackets</h1>

      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select
            onChange={(event) => arrFunc(event.target.value)}>
            <option value="all">All Products</option>
            {
              props.map((cat) =>
                <option key={cat.id} value={cat}>{cat} </option>)
            }
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
        <div className='slider-div'>
          <label>Sort By Price:</label>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          max={6000} />
      </div>
        <div>
          <button><label>Cart</label></button>
        </div>
      </div>
    </nav>
  )
}

export default Header




// import './Header.css';

// function Header() {
//   return (
//     <nav className="product-filter">
//     <h1>Jackets</h1>

//     <div className="sort">
//       <div className="collection-sort">
//         <label>Filter by:</label>
//         <select>
//           <option value="/">All Jackets</option>
//           <option value="/">2016</option>
//           <option value="/">jacket</option>
//           <option value="/">Jackets</option>
//           <option value="/">layers</option>
//           <option value="/">Obermeyer</option>
//           <option value="/">Roxy</option>
//           <option value="/">womens</option>
//         </select>
//       </div>

//       <div className="collection-sort">
//         <label>Sort by:</label>
//         <select>
//           <option value="/">Featured</option>
//           <option value="/">Best Selling</option>
//           <option value="/">Alphabetically, A-Z</option>
//           <option value="/">Alphabetically, Z-A</option>
//           <option value="/">Price, low to high</option>
//           <option value="/">Price, high to low</option>
//           <option value="/">Date, new to old</option>
//           <option value="/">Date, old to new</option>
//         </select>
//       </div>
//     </div>
//   </nav>
//   )
// }

// export default Header