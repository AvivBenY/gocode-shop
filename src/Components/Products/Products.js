import './Products.css';
import Product from '../Product/Product';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


const Products = ({ productsList, originalProducts }) => (
      <section className="products">
            {originalProducts.length > 0
                  ? productsList.map((item) => {
                        return (
                              <Product
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    img={item.image}
                                    qty={item.qty}/>
                        )
                  }) : <LoadingSpinner />
            }
      </section>
)

export default Products