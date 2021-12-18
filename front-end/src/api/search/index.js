import { buildXHR } from "helpers/buildXHR";

export const useListDistrict = buildXHR({
    url: "/api/v1/public/district/all",
    method: "GET",
});
