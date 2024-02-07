const RuknCard = ({ img, title }) => {
  return (
    <div className="w-[200px] relative">
      <img className="" src={img} />
      <p className="text-white absolute bottom-2 left-4 text-lg font-semibold">
        {title}
      </p>
    </div>
  );
};

export default RuknCard;
