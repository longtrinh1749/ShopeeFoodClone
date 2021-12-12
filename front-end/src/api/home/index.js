import { buildXHR } from "helpers/buildXHR";

export const useListItem = buildXHR({
    url: "/api/v1/public/item/all",
    method: "GET",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'crossDomain': true,
        "mode": 'no-cors',
        'Content-Type': 'application/json',
    },
});
