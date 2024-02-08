import YellowStarIcon from "./../../assets/icons/YellowStarIcon";
import HeadPhone from "./../../assets/icons/HeadPhone";
import BookIcon from "./../../assets/icons/BookIcon";
const NewCard = ({ img, title, genre, rating }) => {
  return (
    <div>
      <img className="h-[335px]" src={img} alt="" />
      <p className="text-xl font-bold pt-4">{title}</p>
      <span className="font-sm text-primary">{genre}</span>
      <div className="flex justify-between items-center pt-4">
        <p className="flex gap-[10px] text-amber-600">
          <YellowStarIcon /> {rating}
        </p>
        <div className="flex gap-[10px]">
          <HeadPhone />
          <BookIcon />
        </div>
      </div>
    </div>
  );
};

export default NewCard;
