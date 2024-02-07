import { ruknData } from "../../Data/data";
import RuknCard from "./RuknCard";

const Ruknlar = () => {
  return (
    <section className="container mx-auto pb-[64px]">
      <div>
        <h1 className="text-[32px] font-bold">Рукнлар</h1>
        <ul className="flex gap-4 pt-[32px]">
          {ruknData.map((item) => (
            <li key={item.id}>
              <RuknCard img={item.img} title={item.title} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Ruknlar;
