import { useState, useEffect } from "react";

export function useFetch(callback, params) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);

      try {
        const responseData = await callback(params);
        setData(responseData);
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    };

    fetch();
  }, [callback, params]);

  return { data, setData, error, loading };
}
