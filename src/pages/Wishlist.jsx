function Wishlist({ wishlist }) {
    return (
        <div>
            {wishlist?.map((product) => (
                <p key={product}>{product}</p>
            ))}
        </div>
    );
}

export default Wishlist;
