import React from "react";
import Button from "./../../../Components/Buttons/Button";
import HeartIcon from "./../../../assets/icons/showcase/HeartIcon";

const Add = () => {
  return (
    <div className="w-1/5 bg-primary px-[25px] py-[38px] rounded-lg flex flex-col justify-between">
      <h3 className="text-2xl font-bold text-white">
        Китоб ўқишни ёқтирасизми?
      </h3>
      <p className="text-white">
        Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
      </p>
      <Button variant="secondary" className="flex gap-3">
        <HeartIcon />
        Обуна бўлиш
      </Button>
    </div>
  );
};

export default Add;
