import { useContext } from "react";
import StatesContext from "../../Contexts/StatesContext"
import "./CheckoutCard.css"

const CheckoutCard = ({ id,title, price, img, qty})=> {    
    const {removeFromCart} = useContext(StatesContext);
    
    return (
      <div className="checkout-card">
          <div >
              <h5>{title}</h5>
              {qty > 0 && <p>{`x ${qty}`}</p>}
          </div>
              <h6>Price: {price}</h6>
          <button className="button4" onClick={() => removeFromCart(id)}>
            Remove</button>         
      </div>
    )
  }
  
  export default CheckoutCard