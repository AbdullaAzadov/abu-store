import { Link } from "react-router-dom";
import style from "./Logo.module.css";

function Logo({ children }) {
    return (
        <Link to="/" className={style.logo}>
            {children}
        </Link>
    );
}

export default Logo;
