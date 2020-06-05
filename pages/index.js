import React from "react";
import Layout from "../components/common/layout";
import Banner from "../components/banner";
import BlockChain from "../components/blockchain";
import LearningSection from "../components/learningsection";
import TopCourse from "../components/topcourse";
import SkillInstructr from "../components/skillinstructr";
import Achivement from "../components/achivement";
import Footer from "../components/footer";

import "../static/scss/index.sass";
const Landing = () => {
  return (
    <>
      <Layout title="Home" />
      <Banner />
      <BlockChain />
      <LearningSection />
      <TopCourse />
      <SkillInstructr />
      <Achivement />
      <Footer />
    </>
  );
};

export default Landing;
