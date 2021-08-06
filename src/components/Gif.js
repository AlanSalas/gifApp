const Gif = ({ title, url }) => {
  return (
    <div className="gif">
      <img src={url} alt={title} title={title} />
    </div>
  );
};

export default Gif;
