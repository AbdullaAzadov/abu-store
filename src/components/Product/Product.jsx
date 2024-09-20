import { useEffect, useState } from "react";
import { RiHeartAdd2Line, RiHeart3Fill } from "react-icons/ri";
import { TbShoppingCartPlus, TbShoppingCartCopy } from "react-icons/tb";
import proptypes from "prop-types";

import styles from "./Product.module.css";
import IconButton from "../IconButton/IconButton";

export default function Product({ product, handler, cart, wishlist }) {
    const { images, title, price, id, rating } = product;
    const [isLoading, setIsLoading] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        if (wishlist.includes(id)) setIsLiked(true);
        if (cart.includes(id)) setIsAdded(true);
    }, [wishlist, cart, id]);

    const handleToggleHover = (v = null) => {
        if (isLoading) return;
        setIsHovered((h) => (v === null ? !h : v));
    };

    const handleAddToCart = () => {
        setIsAdded(true);
        handler({ type: "addToCart", payload: id });
    };
    const handleRemoveFromCart = () => {
        setIsAdded(false);
        handler({ type: "removeFromCart", payload: id });
    };
    const handleAddToWishlist = () => {
        setIsLiked(true);
        handler({ type: "addToWishlist", payload: id });
    };
    const handleRemoveFromWishlist = () => {
        setIsLiked(false);
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
