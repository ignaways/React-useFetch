import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [fetchedData, setFetchedData] = useState({
    data: [],
    isLoading: true,
    isError: false,
  });
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      
      if (data) {
        setFetchedData({
          data: data.results ? data.results : data,
          isLoading: false,
          isError: false,
        });
      }
    } catch (err) {
      console.log("error:::", err);
      setFetchedData({
        data: [],
        isLoading: false,
        isError: true,
      });
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  const { data, isLoading, isError } = fetchedData;
  return { data, isLoading, isError };
};

export default useFetch;
