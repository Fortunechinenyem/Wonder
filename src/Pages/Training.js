import React from "react";
import Footer from "../components/Footer";
import TrainingFeat1 from "../components/TrainingFeat1";
import TrainingFeat2 from "../components/TrainingFeat2";
import TrainingFeat3 from "../components/TrainingFeat3";
import TrainingHero from "../components/TrainingHero";

const Training = () => {
  return (
    <>
      <TrainingHero />
      <TrainingFeat1 />
      <TrainingFeat2 />
      <TrainingFeat3 />
      <Footer />
    </>
  );
};

export default Training;
