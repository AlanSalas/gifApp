import { useState } from "react";
import PropTypes from "prop-types";
import { FcSearch } from "react-icons/fc";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue("");
    }
  };

  return (
    <form className="add-category" onSubmit={handleSubmit}>
      <div className="add-category__input">
        <FcSearch />
        <input
          type="text"
          placeholder="Search Gifs!"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
