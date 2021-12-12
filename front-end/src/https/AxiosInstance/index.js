import axios from "axios";

export const AXIOS_INSTANCE = axios.create({
  // TODO: Use env variables for baseURL instead of hard code
    baseURL: process.env.REACT_APP_BACKEND_API,
});
