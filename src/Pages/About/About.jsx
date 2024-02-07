import React from "react";
import { aboutData } from "../../Data/data";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section className="py-4 container mx-auto">
      <ul className="flex justify-between">
        {aboutData.map((item) => (
          <li key={item.id}>
            <AboutCard
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
