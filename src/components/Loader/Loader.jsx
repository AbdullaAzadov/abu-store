import propTypes from "prop-types";
import { LuLoader2 } from "react-icons/lu";
import styles from "./Loader.module.css";

export default function Loader({ size = 48, color = "#344966" }) {
    return <LuLoader2 className={styles.icon} color={color} size={size} />;
}

Loader.propTypes = {
    size: propTypes.number,
    color: propTypes.string,
};
