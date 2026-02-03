"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { flightService, type SearchFlightsInput } from "@/services/flight.service";
import type { FlightResult } from "@/types/flight";

type State = {
  flights: FlightResult[];
  loading: boolean;
  loadingMore: boolean;
  page: number;
  hasMore: boolean;
  error: string | null;
};

export function useSearchFlights(
  input: Omit<SearchFlightsInput, "page" | "limit">
) {
  const [state, setState] = useState<State>({
    flights: [],
    loading: true,
    loadingMore: false,
    page: 1,
    hasMore: false,
    error: null,
  });

  const requestIdRef = useRef(0);

  const canSearch = !!input.from && !!input.to && !!input.departure;

  const stableInput = useMemo(
    () => ({
      from: input.from,
      to: input.to,
      departure: input.departure,
      returnDate: input.returnDate,
      numOfPassengers: input.numOfPassengers,
    }),
    [input.from, input.to, input.departure, input.returnDate, input.numOfPassengers],
  );

  const fetchPage = useCallback(
    async (targetPage: number, append: boolean) => {
      if (!canSearch) {
        setState({
          flights: [],
          loading: false,
          loadingMore: false,
          page: 1,
          hasMore: false,
          error: null,
        });
        return;
      }

      const requestId = ++requestIdRef.current;

      setState((prev) => ({
        ...prev,
        error: null,
        ...(append ? { loadingMore: true } : { loading: true }),
      }));

      try {
        const res = await flightService.searchFlights({
          ...stableInput,
          page: targetPage,
          limit: 5,
        });

        if (requestId !== requestIdRef.current) return;

        setState((prev) => ({
          ...prev,
          flights: append ? [...prev.flights, ...res.items] : res.items,
          page: targetPage,
          hasMore: !!res.hasMore,
        }));
      } catch (e: any) {
        if (requestId !== requestIdRef.current) return;

        setState((prev) => ({
          ...prev,
          flights: append ? prev.flights : [],
          hasMore: false,
          error: e?.message ?? "Search failed",
        }));
      } finally {
        if (requestId !== requestIdRef.current) return;

        setState((prev) => ({
          ...prev,
          loading: false,
          loadingMore: false,
        }));
      }
    },
    [canSearch, stableInput],
  );

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      flights: [],
      page: 1,
      hasMore: false,
      error: null,
      loading: true,
      loadingMore: false,
    }));

    fetchPage(1, false);
  }, [
    input.from,
    input.to,
    input.departure,
    input.returnDate,
    input.numOfPassengers,
    fetchPage,
  ]);

  const loadMore = useCallback(() => {
    if (state.loadingMore || !state.hasMore) return;
    fetchPage(state.page + 1, true);
  }, [fetchPage, state.hasMore, state.loadingMore, state.page]);

  return {
    flights: state.flights,
    loading: state.loading,
    loadingMore: state.loadingMore,
    hasMore: state.hasMore,
    error: state.error,
    loadMore,
    refetch: () => fetchPage(1, false),
  };
}
