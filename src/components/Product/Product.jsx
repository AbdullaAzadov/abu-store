import { useState } from "react";
import { RiHeartAdd2Line, RiHeart3Fill } from "react-icons/ri";
import { TbShoppingCartPlus, TbShoppingCartCopy } from "react-icons/tb";
import proptypes from "prop-types";

import styles from "./Product.module.css";
import IconButton from "../IconButton/IconButton";

export default function Product({ product, handler, cart, wishlist }) {
    const { images, title, price, id, rating } = product;
    const [isLoading, setIsLoading] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const isLiked = wishlist.includes(id);
    const isAdded = cart.includes(id);

    const handleToggleHover = (v = null) => {
        if (isLoading) return;
        setIsHovered((h) => (v === null ? !h : v));
    };

    const handleAddToCart = () => {
        handler({ type: "addToCart", payload: id });
    };
    const handleRemoveFromCart = () => {
        handler({ type: "removeFromCart", payload: id });
    };
    const handleAddToWishlist = () => {
        handler({ type: "addToWishlist", payload: id });
    };
    const handleRemoveFromWishlist = () => {
        handler({ type: "removeFromWishlist", payload: id });
    };
    const handleOnLoaded = () => {
        setIsLoading(false);
    };

    return (
        <li
            key={id}
            className={`${styles.product} ${isHovered ? "hover" : ""}`}
        >
            <div
                className={`${styles.container}  ${isLoading && "loader"}`}
                onMouseLeave={() => handleToggleHover(false)}
                onMouseEnter={() => handleToggleHover(true)}
            >
                <img
                    src={images[0]}
                    alt={title}
                    onLoad={handleOnLoaded}
                    className={isLoading ? "hide" : ""}
                />

                {isHovered && (
                    <div className={styles.hoverInfo}>
                        <h5>{rating}⭐</h5>
                        <nav>
                            <IconButton size="m" bgColor="dark">
                                {isLiked ? (
                                    <RiHeart3Fill
                                        onClick={handleRemoveFromWishlist}
                                    />
                                ) : (
                                    <RiHeartAdd2Line
                                        onClick={handleAddToWishlist}
                                    />
                                )}
                            </IconButton>
                            <IconButton size="m" bgColor="dark">
                                {isAdded ? (
                                    <TbShoppingCartCopy
                                        onClick={handleRemoveFromCart}
                                    />
                                ) : (
                                    <TbShoppingCartPlus
                                        onClick={handleAddToCart}
                                    />
                                )}
                            </IconButton>
                        </nav>
                    </div>
                )}
            </div>
            <div
                className={`${styles.info}  ${isLoading && "loader"}`}
                onMouseLeave={() => handleToggleHover(false)}
                onMouseEnter={() => handleToggleHover(true)}
            >
                <h5 className={isLoading ? "hide" : ""}>{title}</h5>
                <h5 className={isLoading ? "hide" : ""}>{price}$</h5>
            </div>
        </li>
    );
}

Product.propTypes = {
    product: proptypes.object.isRequired,
    handler: proptypes.func.isRequired,
    cart: proptypes.array.isRequired,
    wishlist: proptypes.array.isRequired,
};
