import { LuSearchX } from "react-icons/lu";
import propTypes from "prop-types";
import styles from "./NoResults.module.css";

export default function NoResults({ query, size = "6rem", color = "#344966" }) {
    return (
        <div className={styles.container}>
            <LuSearchX size={size} color={color} />
            <h1>Ничего не найдено!</h1>
            <h3>По запросу {`"${query}"`} мы не смогли найти товары.</h3>
        </div>
    );
}

NoResults.propTypes = {
    query: propTypes.string.isRequired,
    size: propTypes.string || propTypes.number,
    color: propTypes.string,
};
