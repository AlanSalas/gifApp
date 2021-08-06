const Gif = ({ title, url }) => {
  return (
    <div className="gif-card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default Gif;
