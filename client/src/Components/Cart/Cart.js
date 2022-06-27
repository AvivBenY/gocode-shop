
import CheckoutCard from '../CheckoutCard/CheckoutCard'

const Cart = ({checkoutLst}) => {
    return(
        <section>
        {checkoutLst.map((item) => {
            return (
                <CheckoutCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    qty ={item.qty} />
            )
        })}
    </section>
)}
export default Cart

