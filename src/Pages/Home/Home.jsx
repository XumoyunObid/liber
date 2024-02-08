import About from "../About/About";
import AudioBooks from "../AudioBooks/AudioBooks";
import NewAdded from "../New/NewAdded";
import Ruknlar from "../Ruknlar/Ruknlar";
import Showcase from "./Showcase";

const Home = () => {
  return (
    <>
      <Showcase />
      <About />
      <Ruknlar />
      <NewAdded />
      <AudioBooks />
    </>
  );
};

export default Home;
