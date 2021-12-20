import { SEARCH_LABELS } from "redux/actionLabels";

export function getDistrictList(payload) {
    return {
        type: SEARCH_LABELS.LOAD_DISTRICT_LIST,
        payload,
    };
}

export function updateFilterStatus(payload) {
    return {
        type: SEARCH_LABELS.DROPDOWN_STATUS,
        payload,
    };
}

export function updateFilterList(payload) {
    return {
        type: SEARCH_LABELS.FILTER_LIST,
        payload,
    };
}
