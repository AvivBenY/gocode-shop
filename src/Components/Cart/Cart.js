
import CheckoutCard from '../CheckoutCard/CheckoutCard'

const Cart = ({checkoutLst}) => {
    return(
        <section>
        {checkoutLst.map((item) => {
            return (
                <CheckoutCard
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    img={item.image}
                    qty ={item.qty} />
            )
        })}
    </section>
)}
export default Cart

