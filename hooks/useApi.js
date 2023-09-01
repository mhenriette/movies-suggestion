import { useState, useEffect, useCallback } from "react";

const useApi = () => {

  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);



  const fetchData = useCallback(async (url, method, payload) => {
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
  },[]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch(url, {
  //         method,
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ payload }),
  //       });
  //
  //       const result = await response.json();
  //       if (response.status !== 200) {
  //         throw (
  //           result.error ||
  //           new Error(`Request failed with status ${response.status}`)
  //         );
  //       }
  //
  //       setData(result);
  //       setError(null);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   if (payload) {
  //     fetchData();
  //   }
  // }, [url, method, payload]);

  return { data, error, loading, fetchData };
};

export default useApi;
