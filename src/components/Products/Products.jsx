import styles from "./Products.module.css";
import Product from "../Product/Product";
import PageNav from "../PageNav/PageNav";
import proptypes from "prop-types";

function Products({
    products,
    handler,
    state,
    maxPages,
    page,
    setNextPage,
    setPrevPage,
    setPage,
}) {
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
            <PageNav
                count={maxPages}
                current={page}
                onNext={setNextPage}
                onPrev={setPrevPage}
                onSet={setPage}
            />
        </div>
    );
}
export default Products;

Products.propTypes = {
    products: proptypes.array.isRequired,
    handler: proptypes.func.isRequired,
    state: proptypes.object.isRequired,
    maxPages: proptypes.number,
    page: proptypes.number,
    setNextPage: proptypes.func,
    setPrevPage: proptypes.func,
    setPage: proptypes.func,
};
