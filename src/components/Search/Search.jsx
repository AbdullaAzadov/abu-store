import styles from "./Search.module.css";
import { IoIosSearch } from "react-icons/io";

function Search({ children }) {
    return (
        <div className={styles.searchBar}>
            <input type="text" placeholder={children} />
            <IoIosSearch className={styles.searchIcon} />
        </div>
    );
}

export default Search;
