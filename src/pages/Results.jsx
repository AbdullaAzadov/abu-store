import { useEffect, usState } from "react";
import { useSearchParams } from "react-router-dom";

function Results() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query").trim();

    useEffect(() => {
        async function fetchProducts(q) {
            const res = await fetch(
                `https://dummyjson.com/products/search?q=${q}`
            );
            const data = await res.json();
            console.log(data);
        }

        if (!query) return;
        fetchProducts(query);
    }, [query]);

    return <div>Results for {query}</div>;
}

export default Results;
