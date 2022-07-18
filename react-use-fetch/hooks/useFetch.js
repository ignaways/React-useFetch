import {useState, useEffect} from 'react';
const useFetch = (url) => {
  const  [fetchedData, setFetchedData] = useState({
    data:[],
    isLoading: true,
    error: false,
  });
  
}

export default useFetch;