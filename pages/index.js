import React from "react";
import Layout from "../components/common/layout";
import Banner from "../components/banner";
import BlockChain from "../components/blockchain";
import LearningSection from "../components/learningsection";
import TopCourse from "../components/topcourse";
import SkillInstructr from "../components/skillinstructr";
import Achivement from "../components/achivement";
import Footer from "../components/footer";
import Cards from "../components/cards";
import { ToastContainer } from 'react-toastify'

import "../static/scss/index.sass";
const Landing = () => {
  return (
    <>
      
      <Layout title="Home">
        <Banner />
        <Cards />
        <BlockChain />
        <LearningSection />
        <TopCourse />
        <SkillInstructr />
        <Achivement />
        <ToastContainer />
      </Layout>
    </>
  );
};

export default Landing;
