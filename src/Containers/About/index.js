import React, { useEffect } from "react";
import AboutInstitute from "./AboutInstitute";
import MissionValues from "./MissionValues";
import Objective from "./Objective";
import Statistic from "./Statistic";
import Team from "./Team";
import Partners from "./Partners";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AboutInstitute />
      <MissionValues />
      <Objective />
      <Team />
      <Statistic />
      <Partners />
    </>
  );
};

export default About;
