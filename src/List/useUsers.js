import { useState, useEffect } from 'react'

const endPoint = (page, count) => `https://randomuser.me/api/?seed=pigknows&page=${page}&results=${count}&noinfo`

export default function useUsers (page, count) {
  const [data, updateData] = useState({});

  useEffect(() => {
    async function fetchData () {
      const response = await fetch(endPoint(page, count));
      const json = await response.json();
      updateData(json);
    }
    fetchData();
  }, [page, count]);

  return data;
};
