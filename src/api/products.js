const URL = "https://dummyjson.com/products";

export const fetchProducts = async (page = 1, limit = 20) => {
    try {
        const response = await fetch(
            `${URL}?limit=${limit}&skip=${
                (page - 1) * limit
            }&select=title,price,availabilityStatus,category,discountPercentage,id,images,rating,tags/users`
        );
        const data = await response.json();

        return data.products;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const fetchProductsQuery = async (query, page = 1, limit = 20) => {
    try {
        const response = await fetch(
            `${URL}/search?q=${query}&limit=${limit}&skip=${
                (page - 1) * limit
            }&select=title,price,availabilityStatus,category,discountPercentage,id,images,rating,tags/users`
        );
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
