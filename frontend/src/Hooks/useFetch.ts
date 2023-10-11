import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type URL = string;

export default function useFetch<T>(url: URL): [T | null, boolean, boolean] {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    // debouncing
    const timeOut = setTimeout(async function () {
      try {
        setLoading(true);
        setError(false);
        const res: AxiosResponse = await axios.get(url, {
          signal: controller.signal,
        });
        setData(res.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request Canceled: ", error.message);
          return;
        }
        setError(true);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => {
      controller.abort();
      clearTimeout(timeOut);
    };
  }, [url]);

  return [data, loading, error];
}
