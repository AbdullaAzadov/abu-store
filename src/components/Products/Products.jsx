import styles from "./Products.module.css";
import Product from "../Product/Product";
import proptypes from "prop-types";

function Products({ products, handler, state }) {
    return (
        <div className={styles.wrapper}>
            <ul>
                {products?.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        handler={handler}
                        cart={state.cart}
                        wishlist={state.wishlist}
                    />
                ))}
            </ul>
        </div>
    );
}
export default Products;

Products.propTypes = {
    products: proptypes.array.isRequired,
    handler: proptypes.func.isRequired,
    state: proptypes.object.isRequired,
};
