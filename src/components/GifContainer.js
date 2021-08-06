import Gif from "./Gif";
import useFetchGifs from "../hooks/useFetchGifs";

const GifContainer = ({ category }) => {
  const { gifs, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <h4>Loading...</h4>}
      <div className="gif-container">
        {gifs.map((gif) => (
          <Gif key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};

export default GifContainer;
