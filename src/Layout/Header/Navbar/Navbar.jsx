import React from "react";

const Navbar = () => {
  return (
    <nav className="border-y-[1px] border-primary-soft py-[10px]">
      <ul className="list-none flex gap-[20px] container mx-auto">
        <li className="text-primary"><a href="">Аудиокитоб</a></li>
        <li className="text-primary"><a href="">Электрон китоблар</a></li>
        <li className="text-primary"><a href="">Босма китоблар</a></li>
        <li className="text-primary"><a href="">Контакт</a></li>
        <li className="text-primary"><a href="">Биз хақимизда</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
