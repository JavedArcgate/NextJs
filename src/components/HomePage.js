import React from "react";
import styles from '../styles/Home.module.scss'
import HeroSection from "./HeroSection";
import SupportBy from "./SupportBy";
import Slider from "./Slider";
import OurServices from "./OurServices";
import SchoolsComments from "./SchoolsComments";
import FoodCmns from "./FoodCmns";
import NewsLetter from "./NewsLetter";
import Counter from "../feature/counter/Counter";
import countDownTimer from "../components/CountDownTimer"
import ProductTable from "../components/Sortable"

const HomePage = () => {
  return (
    <>
      <main className={styles.main}>
        {/* <countDownTimer date={"1"} /> */}
        {/* <ProductTable /> */}
        {/* <Counter /> */}
        <HeroSection />
        {/* <SupportBy /> */}
        <OurServices />
        {/* <Slider /> */}
        {/* <SchoolsComments /> */}
        {/* <FoodCmns /> */}
        <NewsLetter />
      </main>
    </>
  );
};

export default HomePage;
