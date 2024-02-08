import PlayStoreIcon from "./../../assets/icons/footer/PlayStoreIcon";
import GooglePlayIcon from "./../../assets/icons/footer/GooglePlayIcon";
import FacebookIcon from "./../../assets/icons/footer/FacebookIcon";
import YoutubeIcon from "./../../assets/icons/footer/YoutubeIcon";
import TikTokIcon from "./../../assets/icons/footer/TikTokIcon";
import TelegramIcon from "./../../assets/icons/footer/TelegramIcon";
import InstagramIcon from "./../../assets/icons/footer/InstagramIcon";
import UzCardIcon from './../../assets/icons/footer/UzCardIcon';
import HumoIcon from './../../assets/icons/footer/HumoIcon';
import PayMeIcon from './../../assets/icons/footer/PayMeIcon';
const Footer = () => {
  return (
    <div className="mt-[93px] pt-9 bg-primary-soft">
      <ul className="flex gap-[144px] container mx-auto pb-9">
        <li>
          <ul className="flex flex-col gap-[15px]">
            <h3 className="text-xl font-bold">Платформа хақида</h3>
            <li className="text-lg">
              <a href="">Liber ўзи нима?</a>
            </li>
            <li className="text-lg">
              <a href="">Фойдаланиш шартлари</a>
            </li>
            <li className="text-lg">
              <a href="">Ёрдам</a>
            </li>
          </ul>
        </li>
        <li>
          <ul className="flex flex-col gap-[15px] ">
            <h3 className="text-xl font-bold">Обуна хақида</h3>
            <li className="text-lg">
              <a href="">Обуна бўлиш</a>
            </li>
            <li className="text-lg">
              <a href="">Қандай тўлаш</a>
            </li>
          </ul>
        </li>
        <li>
          <ul className="flex flex-col gap-[15px] ">
            <h3 className="text-xl font-bold">Китоблар </h3>
            <li className="text-lg">
              <a href="">Аудио китоблар</a>
            </li>
            <li className="text-lg">
              <a href="">Электрон китоблар</a>
            </li>
            <li className="text-lg">
              <a href="">Китоблар</a>
            </li>
          </ul>
        </li>
        <li>
          <ul className="flex flex-col gap-[15px]">
            <h3 className="text-xl font-bold">Мобил илова</h3>
            <li>
              <GooglePlayIcon />
            </li>
            <li>
              <PlayStoreIcon />
            </li>
          </ul>
        </li>
      </ul>
      <div className="bg-dark-gray py-4">
        <div className="container mx-auto flex gap-[125px] items-center">
          <div className="pb-5">
            <h4 className="text-sm text-white pb-5">Ижтимоий тармоқлар</h4>
            <ul className="flex gap-[24px]">
              <li className="text-white">
                <a href="">
                  <FacebookIcon />
                </a>
              </li>
              <li className="text-white">
                <a href="">
                  <YoutubeIcon />
                </a>
              </li>
              <li className="text-white">
                <a href="">
                  <TikTokIcon />
                </a>
              </li>
              <li className="text-white">
                <a href="">
                  <TelegramIcon />
                </a>
              </li>
              <li className="text-white">
                <a href="">
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className="pb-5">
            <h4 className="text-sm text-white pb-5">Боғланиш</h4>
            <ul className="flex gap-[24px]">
              <li className="text-white text-base">+998 90 253 77 53</li>
              <li className="text-white text-base">support@liber.uz</li>
            </ul>
          </div>
          <div className="pb-5">
            <h4 className="text-sm text-white pb-5">Биз қабул қиламиз</h4>
            <ul className="flex gap-[24px]">
              <li className="text-white text-base"><UzCardIcon/></li>
              <li className="text-white text-base"><HumoIcon/></li>
              <li className="text-white text-base"><PayMeIcon/></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
