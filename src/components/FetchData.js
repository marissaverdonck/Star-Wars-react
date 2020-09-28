import { useState, useEffect } from 'react';

const useFetchData = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSubjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        if (data.detail === 'Not found') {
          throw new Error('404, Not found');
        }
        setLoading(false);
        setData(data);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    getSubjects();
  }, [url]);
  return { data, loading, error };
};

export default useFetchData;
