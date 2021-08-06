import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifContainer from "./components/GifContainer";

const GifApp = () => {
  const [categories, setCategories] = useState(["Jujutsu Kaisen"]);

  return (
    <div>
      <h2>Gif App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {categories.map((category) => (
        <GifContainer key={category} category={category} />
      ))}
    </div>
  );
};

export default GifApp;
