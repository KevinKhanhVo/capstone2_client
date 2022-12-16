import axios from 'axios';
import { useState, useEffect } from 'react';

function useAxios(url, method, headers = null) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(
          {
            method: method,
            url: url,
            headers: headers
          });
        setResponse(res);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url, method, headers]);

  return { response, error, isLoading };


}

export default useAxios;