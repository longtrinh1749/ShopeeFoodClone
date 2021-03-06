import { buildXHR } from "helpers/buildXHR";

export const useListDeal = buildXHR({
    url: "/api/v1/public/shop/all",
    method: "GET",
});

export const useListShop = buildXHR({
    url: "/api/v1/public/shop",
    method: "GET",
});

export const useListShopByFilter = buildXHR({
    url: "/api/v1/public/shop/filter",
    method: "GET",
});

export const useListCategory = buildXHR({
    url: "/api/v1/public/category/all",
    method: "GET",
});
