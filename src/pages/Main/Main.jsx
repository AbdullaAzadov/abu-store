import propTypes from "prop-types";

import { fetchProducts } from "../../api/products";
import usePagination from "../../hooks/usePagination";
import Products from "../../components/Products/Products";
import Loader from "../../components/Loader/Loader";
import styles from "./Main.module.css";

function Main({ handler, state }) {
    const [products, isLoading] = usePagination(fetchProducts, 20, 1);

    return (
        <main className={styles.main}>
            <Products products={products} handler={handler} state={state} />
            {isLoading && <Loader />}
        </main>
    );
}

Main.propTypes = {
    handler: propTypes.func.isRequired,
    state: propTypes.object.isRequired,
};
export default Main;
