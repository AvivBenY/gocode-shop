import { useContext } from "react";
import StatesContext from "../../Contexts/StatesContext"
import "./CheckoutCard.css"

const CheckoutCard = ({ id,title, price, img, cnt})=> {    
    const {removeFromCart} = useContext(StatesContext);
    console.log("CHECKOUTCART", title, price, img, cnt);
    console.log(title, price, img);
    return (
      <div className="checkout-card">
          <div >
              <h5>{title}</h5>
              {cnt > 0 && <p>{`x ${cnt}`}</p>}
          </div>
              <h6>Price: {price}</h6>
          <button className="button4" onClick={() => removeFromCart(id)}>
            Remove</button>         
      </div>
    )
  }
  
  export default CheckoutCard