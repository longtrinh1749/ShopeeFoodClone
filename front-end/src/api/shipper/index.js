import { buildXHR } from "helpers/buildXHR";
import {
    AXIOS_ORDER_INSTANCE,
    AXIOS_SHOP_INSTANCE,
    AXIOS_USER_INSTANCE,
} from "https/AxiosInstance";

export const useListOrderConfirmed = (id) => {
    return buildXHR(
        {
            url: `/api/v1/public/order/status/${id}`,
            method: "GET",
        },
        AXIOS_ORDER_INSTANCE
    );
};

export const useListOrderAssigned = buildXHR(
    {
        url: "/api/v1/public/order/status-shipper",
        method: "GET",
    },
    AXIOS_ORDER_INSTANCE
);

export const useOrderUser = (id) => {
    return buildXHR(
        {
            url: `/v1/public/users/${id}`,
            method: "GET",
        },
        AXIOS_USER_INSTANCE
    );
};

export const useOrderShop = (id) => {
    return buildXHR(
        {
            url: `/api/v1/public/shop/${id}`,
            method: "GET",
        },
        AXIOS_SHOP_INSTANCE
    );
};

export const useUpdateOrderStatus = buildXHR(
    {
        url: "/api/v1/public/order/update",
        method: "PUT",
    },
    AXIOS_ORDER_INSTANCE
);
