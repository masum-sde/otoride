import React from "react";
import "./Intro.css";
import TopBar from "./../TopBar/TopBar";
import HeadingSection from "../HeadingSection/HeadingSection";
const Intro = () => {
  return (
    <section className="intro intro-height">
      <TopBar />
      <HeadingSection />
    </section>
  );
};

export default Intro;
