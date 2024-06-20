import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    handleFetch();
  }, []);

  return { data, error, loading };
};

export default useFetch;
