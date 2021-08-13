import PropTypes from "prop-types";

const Gif = ({ title, url }) => {
  return (
    <div className="gif">
      <img src={url} alt={title} title={title} />
    </div>
  );
};

Gif.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Gif;
