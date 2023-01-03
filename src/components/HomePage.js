import React from "react";
import styles from '../styles/Home.module.scss'
import HeroSection from "./HeroSection";
import SupportBy from "./SupportBy";
import Slider from "../pages/slider";
import OurServices from "./OurServices";
import FoodComments from "./FoodComments";
import FoodCmns from "./FoodCmns";
import NewsLetter from "./NewsLetter";

const HomePage = () => {
  return (
    <React.Fragment>
      <main className={styles.main}>
        <HeroSection />
        <SupportBy />
        <OurServices />
        <Slider />
        <FoodComments />
        <FoodCmns />
        <NewsLetter />
      </main>
    </React.Fragment>
  );
};

export default HomePage;
