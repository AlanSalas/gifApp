import { useState, useEffect } from "react";
import { getGifs } from "../api/gifs";

const useFetchGifs = (category) => {
  const [data, setData] = useState({
    gifs: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((gifs) => {
      setData({
        gifs,
        loading: false,
      });
    });
  }, [category]);

  return data;
};

export default useFetchGifs;
