import './Products.css';
import Product from '../Product/Product';

const Products = ({props}) => (
      <section className="products">
            {props.map((item) =>{
              return(
             <Product key ={item.id} title = {item.title} price={item.price} img ={item.image}/> 
             )
            })}
    </section>
  
    )

export default Products