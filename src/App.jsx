import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useReducer } from "react";
import ScrollToTop from "./helpers/ScrollToTop.jsx";

import Header from "./pages/Header.jsx";
import Main from "./pages/Main.jsx";
import Results from "./pages/Results.jsx";
import Cart from "./pages/Cart.jsx";
import Wishlist from "./pages/Wishlist.jsx";

const initialState = {
    cart: [],
    wishlist: [],
};

function reducer(state, action) {
    switch (action.type) {
        case "addToCart":
            if (state.cart.includes(action.payload)) return state;
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };

        case "removeFromCart":
            return {
                ...state,
                cart: state.cart.filter(
                    (product) => product !== action.payload
                ),
            };
        case "addToWishlist":
            if (state.cart.includes(action.payload)) return state;
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload],
            };

        case "removeFromWishlist":
            return {
                ...state,
                wishlist: state.wishlist.filter(
                    (product) => product !== action.payload
                ),
            };

        default:
            return state;
    }
}

function App() {
    const [state, handler] = useReducer(reducer, initialState);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route index element={<Navigate to="products" replace />} />
                <Route
                    path="products"
                    element={<Main handler={handler} state={state} />}
                />
                <Route path="search" element={<Results />} />
                <Route path="cart" element={<Cart cart={state.cart} />} />
                <Route
                    path="wishlist"
                    element={<Wishlist wishlist={state.wishlist} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
