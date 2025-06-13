import api from "../../api/api.js";

export const fetchProducts = (queryString) => async (dispatch) => {
    try {

        dispatch({type: "IS_FETCHING"});

        const { data } = await api.get(`/public/products?`,
            {
            params: {
                // query: queryString,
                pageNumber: 0,
                pageSize: 10,
                sortBy: 'productId',
                sortOrder: 'desc',
            },
        }
        );

        dispatch({
            type: "FETCH_PRODUCTS",
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage
        });

        dispatch({type: "IS_SUCCESS"});
        // console.log(data.content)

    }catch(error){
        console.log(error)
        dispatch({type: "IS_ERROR",
        payload: error?.response?.data?.message || "Failed to fetch products"});
    }
};

export const fetchCategories = () => async (dispatch) => {
    try {

        dispatch({type: "CATEGORY_LOADER"});

        const { data } = await api.get(`/public/categories`);

        dispatch({
            type: "FETCH_CATEGORIES",
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage
        });

        dispatch({type: "IS_ERROR"});
        // console.log(data.content)

    }catch(error){
        console.log(error)
        dispatch({type: "IS_ERROR",
            payload: error?.response?.data?.message || "Failed to fetch categories"});
    }
};

export const addToCart = (data, qty=1, toast) =>
    (dispatch, getState) => {
//           FInd the product
        const { products } = getState().products;
        // console.log(products);
        const getProduct = products.find(
            (item) => item.productId === data.productId
        );
//         Check for stocks
        const isQuantityExist = getProduct.quantity >= qty
//         if in stock => add
        if (isQuantityExist) {
            dispatch({ type: "ADD_CART" , payload: {...data, quantity: qty}})
            toast.success(`${data?.productName} added to the cart`)
            localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
        }else{
        //     error
            toast.error('Out of Stock!')
        }
//         if not --> error
};

export const increaseCartQuantity = (data, toast, currentQuantity, setCurrentQuantity) =>
    (dispatch, getState) => {
    // Find the product
        const { products } = getState().products;

        // console.log("Products: ", products);

        const getProduct = products.find(
            (item) => item.productId === data.productId
        );

        console.log(getProduct)

        const isQuantityExist = getProduct.quantity >= currentQuantity + 1;

        if (isQuantityExist) {
            const newQuantity = currentQuantity + 1;
            setCurrentQuantity(newQuantity);

            dispatch({
                type: "ADD_CART",
                payload: {...data, quantity: currentQuantity},
            });

            localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
        }else{
            toast.error("Quantity Reached to Limit")
        }
    };

export const decreaseCartQuantity =
    (data, newQuantity) =>
    (dispatch, getState) => {

        dispatch({
            type: "ADD_CART",
            payload: {...data, quantity: newQuantity},
        });
        localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
    };