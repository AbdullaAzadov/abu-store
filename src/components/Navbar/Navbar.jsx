import style from "./Navbar.module.css";

export default function Navbar({ children }) {
    return <nav className={style.nav}>{children}</nav>;
}
