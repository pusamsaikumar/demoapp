import axios from "axios";
import React, { useEffect, useState } from "react";

const UseApiRequestCustomHook = (url) => {
  console.log("url: ", url);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const controller = new AbortController(); // Handle unmount
    const fetchData = async () => {
      setLoading(true);
      await axios
        // .get(url, { signal: controller.signal })
        .get(url)
        .then((response) => {
          setData(response?.data);
        })
        .catch((err) => {
          setError(err?.response?.data?.message || err?.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchData();
    //  return () => controller.abort(); // clean up unmount
  }, [url]);

  return { data, loading, error };
};

export default UseApiRequestCustomHook;
