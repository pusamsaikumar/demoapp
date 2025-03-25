import React, { useEffect, useState } from "react";

const UseFetchMethodCustomHook = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log("data fetch", data);
          setData(data);
        })
        .catch((err) => setError(err?.response?.data?.message || err?.message))
        .finally(() => setLoading(false));
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default UseFetchMethodCustomHook;
