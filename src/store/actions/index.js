// import {dispatch} from "react-hot-toast/src/core/store.js";
import axios from "axios";
import api from "../../api/api.js";

export const fetchProducts = () => async (dispatch) => {
    try {

        dispatch({type: "IS_FETCHING"});

        const { data } = await api.get(`/public/products`,
            {
            params: {
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