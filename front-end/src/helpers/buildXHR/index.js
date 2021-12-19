// libs
import { useState } from "react";
// others
import { AXIOS_INSTANCE } from "https/AxiosInstance";

/**
 * buildXHR
 * @description build a like-useAsync-hook for request API
 * @param configs
 * @return React Hook for requesting API
 * @example
 * type TRequest = {
      email: string;
      password: string;
    };
    type TParams = {
      email: string;
      password: string;
    };
    type TResponse = {
      access_token: string;
    };
    export const useRequestRegisterAccount = buildXHR<
      TRequest,
      TResponse,
      TParams,
    >({
      url: "/example/api/endpoint/",
      method: "POST",
    });
    // Usage in React Component
      const { execute, isLoading, response } = useRequestRegisterAccount();
      execute({
        cbSuccess: (res) => {
          // This is on success callback
        }
      });
 */
export const buildXHR =
    (configs, axiosInstance = AXIOS_INSTANCE) =>
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
