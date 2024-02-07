const MostReadCard = ({ img, title }) => {
  return (
    <div className="flex flex-col gap-2 text-center">
      <img src={img} />
      <p className="text-red">{title}</p>
    </div>
  );
};

export default MostReadCard;
