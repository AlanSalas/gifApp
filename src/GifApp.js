import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifContainer from "./components/GifContainer";

const GifApp = () => {
  const [categories, setCategories] = useState(["Welcome"]);

  return (
    <div className="gif-app">
      <h2 className="gif-app__title">Gif App</h2>
      <AddCategory setCategories={setCategories} />

      {categories.map((category) => (
        <GifContainer key={category} category={category} />
      ))}
    </div>
  );
};

export default GifApp;
