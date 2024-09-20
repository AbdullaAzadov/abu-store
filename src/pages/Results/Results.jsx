import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import propTypes from "prop-types";

import usePagination from "../../hooks/usePagination";
import { fetchProductsQuery } from "../../api/products";
import Products from "../../components/Products/Products";
import Loader from "../../components/Loader/Loader";
import NoResults from "../../components/NoResults/NoResults";
import styles from "./Results.module.css";

function Results({ handler, state }) {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query").trim();
    const [products, isLoading, reset] = usePagination(fetch, 20, 1);

    function fetch(page, limit) {
        return fetchProductsQuery(query, page, limit);
    }

    useEffect(() => {
        reset();
    }, [query]);

    if (!isLoading && products?.length === 0)
        return (
            <main className={styles.mainNoResults}>
                <NoResults query={query} />
            </main>
        );

    return (
        <main className={styles.main}>
            <span>Результаты поиска по запросу: {query}</span>
            <Products products={products} handler={handler} state={state} />
            {isLoading && <Loader />}
        </main>
    );
}

export default Results;

Results.propTypes = {
    handler: propTypes.func.isRequired,
    state: propTypes.object.isRequired,
};
