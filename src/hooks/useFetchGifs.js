import { useState, useEffect } from "react";

const useFetchGifs = (category) => {
  const [data, setData] = useState({
    gifs: [],
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "7IGuswnWXqS56OHmYZc4hbHi4XsdFiaD";
      const searchEndPoint = "https://api.giphy.com/v1/gifs/search";
      const res = await fetch(
        `${searchEndPoint}?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`
      );

      const { data } = await res.json();

      const gifsData = data.map((gif) => {
        return {
          id: gif.id,
          title: gif.title,
          url: gif.images.original.url,
        };
      });

      setData({
        gifs: gifsData,
        loading: false,
      });
    };
    fetchData();
  }, [category]);

  return data;
};

export default useFetchGifs;
