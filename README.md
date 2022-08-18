# React-useFetch
This is a tutorial on building a custom useFetch hook in React js / React native for fetching data from the API ✨

&nbsp;
## Introduction
use useFetch to build our own custom hook to extract component logic for fetching data into a reusable component function. We'll create the useFetch hook to fetch data from different API endpoints without unnecessary code repetition.

&nbsp;
## useFetch.js
+ **Folder** _.... / src / hooks / useFetch.js_
  
  ``` jsx
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
  ```
  &nbsp;

## Usage
- **`npm install`**
- **`npm run start`**