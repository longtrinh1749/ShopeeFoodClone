import { useState } from "react";
import { AXIOS_SHOP_INSTANCE } from "https/AxiosInstance";

export const buildXHR =
    (configs, axiosInstance = AXIOS_SHOP_INSTANCE) =>
    () => {
        const [isLoading, setLoading] = useState(false);
        const [response, setResponse] = useState(null);
        const [error, setError] = useState(null);

        const execute = (cbProps) => {
            const { data, params, cbSuccess, cbError } = cbProps || {};
            setLoading(true);
            setResponse(null);
            setError(null);

            return axiosInstance
                .request({
                    data,
                    params,
                    ...configs,
                })
                .then((response) => {
                    setResponse(response.data);
                    if (cbSuccess) cbSuccess(response.data);
                })
                .catch((error) => {
                    setError(error);
                    if (cbError) cbError(error);
                })
                .finally(() => setLoading(false));
        };

        return {
            execute,
            isLoading,
            response,
            error,
        };
    };
