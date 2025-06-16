import axios, { type AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";

type UseApiOptions = {
  autoFetch?: boolean;
}

type UseApiResult<T> = {
  loading: boolean;
  data: T | null;
  error: Error | null;
  fetch: () => void;
}

export const useApi = <T,>(
  apiCall: () => { call: Promise<AxiosResponse<T>>; controller: AbortController },
  options?: UseApiOptions
): UseApiResult<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetch = useCallback(() => {
    const { call } = apiCall();
    setLoading(true);
    call
      .then((response) => {
        setData(response.data);
        setError(null);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Request Canceled", err.message);
        } else {
          setError(err);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiCall]);

  useEffect(() => {
    if (options?.autoFetch) {
      const { call, controller } = apiCall();
      setLoading(true);
      call
        .then((response) => {
          setData(response.data);
          setError(null);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("Request Canceled", err.message);
          } else {
            setError(err);
          }
        })
        .finally(() => {
          setLoading(false);
        });

      return () => controller.abort(); 
    }
  }, [apiCall, options?.autoFetch]);

  return { loading, data, error, fetch };
};