import { Slider } from "@mui/material";
import { useState } from "react";
import MuiDrawer from "../MuiDrawer/MuiDrawer";
import "./Header.css";

function Header({ props, arrFunc, priceFunc, checkoutLst, sortFunc }) {
  const [value, setValue] = useState([0, 6000]);
  const min = value[0];
  const max = value[1];

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    priceFunc(min, max);
  };

  return (
    <nav className="product-filter">
      <h1 className="header-title">GoCode-Shop</h1>

      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select onChange={(event) => arrFunc(event.target.value)}>
            <option value="all">All Products</option>
            {props.map((cat) => (
              <option key={cat.id} value={cat}>
                {cat}{" "}
              </option>
            ))}
          </select>
        </div>
        <div className="collection-sort">
          <label>Sort by:</label>
          <select
            defaultValue="/"
            onChange={(event) => sortFunc(event.target.value)}
          >
            <option value="/">Featured</option>
            <option value="AZ">Alphabetically, A-Z</option>
            <option value="ZA">Alphabetically, Z-A</option>
            <option value="pricelh">Price, low to high</option>
            <option value="pricehl">Price, high to low</option>
          </select>
        </div>
        <div className="slider-div">
          <label>Sort By Price:</label>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            max={1000}
          />
        </div>
        <MuiDrawer checkoutLst={checkoutLst} />
      </div>
    </nav>
  );
}

export default Header;
