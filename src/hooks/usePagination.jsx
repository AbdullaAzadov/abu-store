import { useState, useEffect } from "react";

export default function usePagination(
    fetchFn,
    limit = 20,
    initialPage = 1,
    initialItems = []
) {
    const [items, setItems] = useState(initialItems);
    const [page, setPage] = useState(initialPage);
    const [doFetch, setDoFetch] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [wasLastItemLoaded, setWasLastItemLoaded] = useState(false);

    const onScroll = () => {
        const { scrollHeight, scrollTop, clientHeight } =
            document.documentElement;
        const scrollBottom = scrollTop + clientHeight;

        if (scrollBottom / scrollHeight > 0.95 && !doFetch)
            setDoFetch(() => true);
    };

    useEffect(() => {
        document.addEventListener("scroll", onScroll);
        return () => {
            document.removeEventListener("scroll", onScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const fetch = async () => {
            setIsLoading(true);
            const data = await fetchFn(page, limit);
            setItems(data);
        };

        if (items.length === 0) fetch().then(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        async function fetch() {
            setIsLoading(true);
            setPage((page) => page + 1);
            const data = await fetchFn(page + 1, limit);
            if (data.length == 0) {
                setWasLastItemLoaded(true);
                return;
            }
            setItems((items) => [...items, ...data]);
        }
        if (doFetch && !isLoading && !wasLastItemLoaded)
            fetch()
                .then(() => setDoFetch(false))
                .then(() => setIsLoading(false));
    }, [doFetch, page, isLoading, fetchFn, limit, items, wasLastItemLoaded]);

    return [items, isLoading];
}
