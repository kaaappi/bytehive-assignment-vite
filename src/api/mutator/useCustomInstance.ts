import Axios, { AxiosRequestConfig, AxiosError } from "axios";
import { useAuthStore } from "../../authStore.ts";

export const AXIOS_INSTANCE = Axios.create({
  baseURL: "https://interview-api-8icc.onrender.com",
});

export const useCustomInstance = <T>(): ((config: AxiosRequestConfig) => Promise<T>) => {
  const { token } = useAuthStore();

  return (config: AxiosRequestConfig) => {
    const source = Axios.CancelToken.source();
    const promise = AXIOS_INSTANCE({
      ...config,
      headers: {
        ...config.headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
      cancelToken: source.token,
    }).then(({ data }) => data);

    return promise;
  };
};

export default useCustomInstance;

export type ErrorType<Error> = AxiosError<Error>;
