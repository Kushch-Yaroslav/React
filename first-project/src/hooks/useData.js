import React, { useEffect, useState } from "react";

function useData(loadData) {
  const [data, setData] = useState([]);
  const [isFetching, setFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadData()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setFetching(false);
      });
  }, []);
  return { data, isFetching, error };
}

export default useData;
