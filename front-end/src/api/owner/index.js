import { buildXHR } from "helpers/buildXHR";

export const useShopItemList = buildXHR({
    url: "/api/v1/public/item/shop",
    method: "GET",
});

export const useShopSectionList = buildXHR({
    url: "/api/v1/public/section/shop",
    method: "GET",
});

export const useShopItemListAll = buildXHR({
    url: "/api/v1/public/item/all",
    method: "GET",
});

export const useNewShopItem = buildXHR({
    url: "/api/v1/public/item/upload",
    method: "POST",
});

export const useEditShopItem = buildXHR({
    url: "/api/v1/public/item/update",
    method: "PUT",
});
