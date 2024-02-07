import { data } from "../../Data/data";
import NewCard from "./NewCard";

const NewAdded = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-[32px] font-bold">Янги қўшилганлар</h1>
      <ul className="flex gap-[24px] pt-5">
        {data.slice(0, 5).map((item) => (
          <li key={item.id}>
            <NewCard
              img={item.img}
              title={item.title}
              genre={item.genre}
              rating={item.rating}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewAdded;
