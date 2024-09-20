import React from "react";

function Cart({ cart }) {
    return (
        <div>
            {cart?.map((product) => (
                <p key={product}>{product}</p>
            ))}
        </div>
    );
}

export default Cart;
