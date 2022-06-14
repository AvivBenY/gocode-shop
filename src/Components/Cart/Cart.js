import CheckoutCard from '../CheckoutCard/CheckoutCard'

const Cart = ({checkoutLst}) => {
console.log(checkoutLst);
    return(
    <section>
        {checkoutLst.map((item) => {
            return (
                <CheckoutCard
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    img={item.image}
                    cnt ={item.cnt} />
            )
        })}
    </section>
)}

export default Cart

