export const getGifs = async (category) => {
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

  return gifsData;
};
