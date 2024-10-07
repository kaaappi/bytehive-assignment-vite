/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Interview API
 * Documentation for interview endpoints
 * OpenAPI spec version: 1.0.0
 */
import { useQuery } from "@tanstack/react-query";
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { useCallback } from "react";
import type { GetApiSalesRevenue200Item } from "../../types";
import { useCustomInstance } from "../../mutator/useCustomInstance";
import type { ErrorType } from "../../mutator/useCustomInstance";

/**
 * @summary Get sales revenue data
 */
export const useGetApiSalesRevenueHook = () => {
  const getApiSalesRevenue = useCustomInstance<GetApiSalesRevenue200Item[]>();

  return useCallback(
    (signal?: AbortSignal) => {
      return getApiSalesRevenue({
        url: `https://interview-api-8icc.onrender.com/api/sales/revenue`,
        method: "GET",
        signal,
      });
    },
    [getApiSalesRevenue],
  );
};

export const getGetApiSalesRevenueQueryKey = () => {
  return [`https://interview-api-8icc.onrender.com/api/sales/revenue`] as const;
};

export const useGetApiSalesRevenueQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetApiSalesRevenueHook>>>,
  TError = ErrorType<void>,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiSalesRevenueHook>>>, TError, TData>>;
}) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetApiSalesRevenueQueryKey();

  const getApiSalesRevenue = useGetApiSalesRevenueHook();

  const queryFn: QueryFunction<Awaited<ReturnType<ReturnType<typeof useGetApiSalesRevenueHook>>>> = ({ signal }) =>
    getApiSalesRevenue(signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useGetApiSalesRevenueHook>>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetApiSalesRevenueQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetApiSalesRevenueHook>>>
>;
export type GetApiSalesRevenueQueryError = ErrorType<void>;

export function useGetApiSalesRevenue<
  TData = Awaited<ReturnType<ReturnType<typeof useGetApiSalesRevenueHook>>>,
  TError = ErrorType<void>,
>(options: {
  query: Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiSalesRevenueHook>>>, TError, TData>> &
    Pick<
      DefinedInitialDataOptions<Awaited<ReturnType<ReturnType<typeof useGetApiSalesRevenueHook>>>, TError, TData>,
      "initialData"
    >;
}): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiSalesRevenue<
  TData = Awaited<ReturnType<ReturnType<typeof useGetApiSalesRevenueHook>>>,
  TError = ErrorType<void>,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiSalesRevenueHook>>>, TError, TData>> &
    Pick<
      UndefinedInitialDataOptions<Awaited<ReturnType<ReturnType<typeof useGetApiSalesRevenueHook>>>, TError, TData>,
      "initialData"
    >;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetApiSalesRevenue<
  TData = Awaited<ReturnType<ReturnType<typeof useGetApiSalesRevenueHook>>>,
  TError = ErrorType<void>,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiSalesRevenueHook>>>, TError, TData>>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey };
/**
 * @summary Get sales revenue data
 */

export function useGetApiSalesRevenue<
  TData = Awaited<ReturnType<ReturnType<typeof useGetApiSalesRevenueHook>>>,
  TError = ErrorType<void>,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiSalesRevenueHook>>>, TError, TData>>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = useGetApiSalesRevenueQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
}
