import React from "react";
import MostRead from "./Components/MostRead";
import Add from "./Components/Add";

const Showcase = () => {
  return (
    <section>
      <div className="container flex mx-auto py-4 justify-between">
        <MostRead />
        <Add />
      </div>
    </section>
  );
};

export default Showcase;
