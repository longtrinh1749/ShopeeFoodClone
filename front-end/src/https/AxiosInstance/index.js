import axios from "axios";

export const AXIOS_SHOP_INSTANCE = axios.create({
  // TODO: Use env variables for baseURL instead of hard code
    baseURL: process.env.REACT_APP_BACKEND_SHOP_API,
});

export const AXIOS_ORDER_INSTANCE = axios.create({
  // TODO: Use env variables for baseURL instead of hard code
    baseURL: process.env.REACT_APP_BACKEND_ORDER_API,
});

export const AXIOS_USER_INSTANCE = axios.create({
  // TODO: Use env variables for baseURL instead of hard code
    baseURL: process.env.REACT_APP_BACKEND_USER_API,
});