import { useState, useEffect } from "react";

const useApi = (url, method, payload) => {

  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {

        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ payload }),
        });

        const result = await response.json();
        if (response.status !== 200) {

          throw (
            result.error ||
            new Error(`Request failed with status ${response.status}`)
          );
        }

        setData(result); 
        setError(null);
      } catch (error) {
        setError(error); 
      } finally {
        setLoading(false); 
      }
    };
    if (payload) {
      fetchData(); 
    }
  }, [url, method, payload]);

  return { data, error, loading };
};

export default useApi;
