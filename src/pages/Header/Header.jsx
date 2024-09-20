import { useNavigate, useLocation } from "react-router-dom";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { PiShoppingCart, PiShoppingCartFill } from "react-icons/pi";

import style from "./Header.module.css";
import Logo from "../../components/Logo/Logo";
import Search from "../../components/Search/Search";
import IconButton from "../../components/IconButton/IconButton";
import Navbar from "../../components/Navbar/Navbar";

function Header() {
    const location = useLocation().pathname;

    const navigate = useNavigate();

    return (
        <header>
            <Logo>Abu Store</Logo>
            <Search>Что вы хотите купить...</Search>
            <Navbar>
                <IconButton size="x">
                    {location === "/wishlist" ? (
                        <IoMdHeart onClick={() => navigate("/wishlist")} />
                    ) : (
                        <IoMdHeartEmpty onClick={() => navigate("/wishlist")} />
                    )}
                </IconButton>
                <IconButton size="x">
                    {location === "/cart" ? (
                        <PiShoppingCartFill onClick={() => navigate("/cart")} />
                    ) : (
                        <PiShoppingCart onClick={() => navigate("/cart")} />
                    )}
                </IconButton>
            </Navbar>
        </header>
    );
}

export default Header;
