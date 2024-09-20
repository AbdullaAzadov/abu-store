import { useEffect, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import propTypes from "prop-types";
import styles from "./Main.module.css";
import Products from "../components/Products/Products";

const initialState = {
    maxPages: null,
    page: null,
    limit: 20,
    skip: 0,
    products: [],
};

function reducer(state, action) {
    switch (action.type) {
        case "setProducts":
            return {
                ...state,
                products: action.payload,
            };

        case "setMaxPages":
            return {
                ...state,
                maxPages: action.payload,
                page: Math.min(state.page, action.payload),
            };

        case "setCurrentPage":
            return {
                ...state,
                page: action.payload,
                skip: (action.payload - 1) * state.limit,
            };
        default:
            return state;
    }
}

Main.propTypes = {
    handler: propTypes.func.isRequired,
    state: propTypes.object.isRequired,
};
function Main({ handler, state }) {
    const [{ products, maxPages, page, limit, skip }, dispatch] = useReducer(
        reducer,
        initialState
    );
    const [queryParams, setQueryParams] = useSearchParams();
    const queryPage = parseInt(queryParams.get("page")) || 1;

    function handleIncreasePage() {
        if (maxPages === null) return;
        const value = Math.min(queryPage + 1, maxPages);
        setQueryParams({ page: value });
        dispatch({ type: "setCurrentPage", payload: value });
    }

    function handleDecreasePage() {
        if (maxPages === null) return;
        const value = Math.max(queryPage - 1, 1);
        setQueryParams({ page: value });
        dispatch({ type: "setCurrentPage", payload: value });
    }

    function handleSetPage(newPage) {
        if (maxPages === null || newPage < 0 || newPage > maxPages) return;
        setQueryParams({ page: newPage });
        dispatch({ type: "setCurrentPage", payload: newPage });
    }

    useEffect(() => {
        dispatch({ type: "setCurrentPage", payload: queryPage });
        const data = fetch("https://dummyjson.com/products?limit=1").then(
            (res) => res.json()
        );
        data.then((data) =>
            dispatch({
                type: "setMaxPages",
                payload: Math.ceil(data.total / limit),
            })
        );
    }, [limit, queryPage]);

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch(
                `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,availabilityStatus,category,discountPercentage,id,images,rating,tags`
            );
            const data = await res.json();
            dispatch({ type: "setProducts", payload: data.products });
        }

        if (maxPages !== null) fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, maxPages]);

    return (
        <main className={styles.main}>
            <Products
                products={products}
                maxPages={maxPages}
                page={page}
                handler={handler}
                state={state}
                setNextPage={handleIncreasePage}
                setPrevPage={handleDecreasePage}
                setPage={handleSetPage}
            />
        </main>
    );
}

export default Main;
