import { useState, useEffect } from "react";

export function useFetch(callback) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(async () => {
    setLoading(true);

    try {
      const responseData = await callback();
      setData(responseData);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  }, []);

  return { data, setData, error, loading };
}
