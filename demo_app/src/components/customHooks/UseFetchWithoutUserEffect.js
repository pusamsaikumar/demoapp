import React, { useEffect, useState } from "react";

const UseFetchWithoutUserEffect = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //useEffect(() => {

  //      fetchData();
  //    }, [url]);
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

  return { data, loading, error, fetchData };
};

export default UseFetchWithoutUserEffect;
