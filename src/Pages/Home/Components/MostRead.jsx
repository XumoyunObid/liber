import { data } from "../../../Data/data";
import girl from "../../../assets/Showcase/ReadingGirl.png";
import MostReadCard from "./MostReadCard";

const MostRead = () => {
  return (
    <div className="bg-primary-soft rounded-lg flex pt-[33px] pb-4 gap-4 w-[78%]">
      <div className=" flex flex-col">
        <h1 className="text-2xl pl-4 font-bold">Кўп ўқилаётганлар</h1>
        <img className="w-[275px]" src={girl} />
      </div>
      <ul className="flex gap-4">
        {data.map((item) => (
          <li key={item.id}>
            <MostReadCard img={item.img} title={item.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostRead;
