import React from "react";
import styles from '../styles/Home.module.scss'
import HeroSection from "./HeroSection";
import SupportBy from "./SupportBy";
import Slider from "./Slider";
import OurServices from "./OurServices";
import FoodComments from "./FoodComments";
import FoodCmns from "./FoodCmns";
import NewsLetter from "./NewsLetter";
import Counter from "../feature/counter/Counter";
import countDownTimer from "../components/CountDownTimer"
import ProductTable from "../components/Sortable"

const HomePage = () => {
  return (
    <>
      <main className={styles.main}>
        {/* <countDownTimer date={} /> */}
        <ProductTable />
        <Counter />
        {/* <HeroSection />
        <SupportBy />
        <OurServices />
        <Slider />
        <FoodComments />
        <FoodCmns />
        <NewsLetter /> */}
      </main>
    </>
  );
};

export default HomePage;
