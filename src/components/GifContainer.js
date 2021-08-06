import Masonry from "react-masonry-css";
import Gif from "./Gif";
import Spinner from "./Spinner";
import useFetchGifs from "../hooks/useFetchGifs";

const GifContainer = ({ category }) => {
  const { gifs, loading } = useFetchGifs(category);
  const breakpoints = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="gif-container">
      <h3 className="gif-container__title">Results for {category}</h3>
      {loading && <Spinner />}
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {gifs.map((gif) => (
          <Gif key={gif.id} {...gif} />
        ))}
      </Masonry>
    </div>
  );
};

export default GifContainer;
