import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

import styles from "./Search.module.css";
import { useEffect, useRef } from "react";

function Search({ children }) {
    const inputEl = useRef(null);
    const navigate = useNavigate();

    function handleOnSearch() {
        if (inputEl.current.value.trim().length) {
            navigate(`search?query=${inputEl.current.value} `);
            inputEl.current.value = "";
        }
    }

    useEffect(() => {
        inputEl.current?.focus();
    }, []);

    useEffect(() => {
        function callback(e) {
            if (e.code === "Enter") handleOnSearch();
        }
        document.addEventListener("keydown", callback);

        return () => {
            document.removeEventListener("keydown", callback);
        };
    }, []);

    return (
        <div className={styles.searchBar}>
            <input ref={inputEl} type="text" placeholder={children} />
            <IoIosSearch
                className={styles.searchIcon}
                onClick={handleOnSearch}
            />
        </div>
    );
}

export default Search;
