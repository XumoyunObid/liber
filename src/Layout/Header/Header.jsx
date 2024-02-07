import Logo from "../../assets/icons/header/Logo";
import RukunlarIcon from "./../../assets/icons/header/RukunlarIcon";
import SearchIcon from "./../../assets/icons/header/SearchIcon";
import UzbIcon from "./../../assets/icons/header/UzbIcon";
import UserIcon from "./../../assets/icons/header/UserIcon";

const Header = () => {
  return (
    <div className="py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <div className="flex bg-gray-50">
          <div className="flex gap-3 rounded-l-lg border items-center border-primary py-2 px-5 w-44">
            <RukunlarIcon />
            <p className="text-primary">Ruknlar</p>
          </div>
          <input
            type="text"
            className="w-[484px] border border-primary py-[13px] px-[30px]"
            placeholder="Qidirish"
          />
          <button className="rounded-lg px-[30px]">
            <SearchIcon />
          </button>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex items-center bg-primary-soft py-[10px] px-[15px] rounded-md gap-3">
            <UzbIcon />
            <select
              name=""
              id=""
              className="rounded-lg bg-primary-soft border-primary-soft"
            >
              <option value="Uz">
                <UzbIcon />
                Uz
              </option>
              <option value="Ru">Ru</option>
              <option value="Eng">Eng</option>
            </select>
          </div>
          <button className="rounded-lg bg-primary py-[12px] px-[24px] flex gap-2 text-white">
            <UserIcon />
            Kirish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
