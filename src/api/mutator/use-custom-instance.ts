import Axios, { AxiosRequestConfig, AxiosError } from "axios";

export const AXIOS_INSTANCE = Axios.create({
  baseURL: "https://interview-api-8icc.onrender.com",
});

export const useCustomInstance = <T>(): ((config: AxiosRequestConfig) => Promise<T>) => {
  const token = localStorage.getItem("authToken");

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

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    promise.cancel = () => {
      source.cancel("Query was cancelled by React Query");
    };

    return promise;
  };
};

export default useCustomInstance;

export type ErrorType<Error> = AxiosError<Error>;
