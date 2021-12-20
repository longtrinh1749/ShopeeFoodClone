import { useSelector } from "react-redux";

export const useStore = (pageName, reducerName, equalityFn) => {
    return useSelector(
        (state) => state[pageName][reducerName],
        equalityFn || ((prev, next) => prev === next)
    );
};
