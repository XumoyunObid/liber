import { data } from "../../Data/data";
import NewCard from "../New/NewCard";
const AudioBooks = () => {
  return (
    <div className="container mx-auto py-9">
      <h1 className="text-[32px] font-bold">Аудио китоблар</h1>
      <ul className="flex gap-[24px] pt-5">
        {data.slice(5, 10).map((item) => (
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

export default AudioBooks;
