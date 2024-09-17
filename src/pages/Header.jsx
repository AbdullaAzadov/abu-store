import style from "./Header.module.css";
import Logo from "../components/Logo/Logo";
import Search from "../components/Search/Search";
import { TiShoppingCart } from "react-icons/ti";

function Header() {
    return (
        <header>
            <Logo>Abu Store</Logo>
            <Search>Что вы хотите купить...</Search>
            <TiShoppingCart className={style.cart} />
        </header>
    );
}

export default Header;
