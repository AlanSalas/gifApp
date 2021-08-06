import { useState, useEffect } from "react";
import Gif from "./Gif";

const GifContainer = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        category
      )}&limit=10&api_key=7IGuswnWXqS56OHmYZc4hbHi4XsdFiaD`
    );

    const { data } = await res.json();

    const gifsData = data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
      };
    });

    console.log(gifsData);
    setGifs(gifsData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="gif-container">
        {gifs.map((gif) => (
          <Gif key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};

export default GifContainer;
