import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import "./FAQ.css";

const data = {
  rows: [
      {
          title: "What’s your hourly rate?",
          content: "The hourly rate we agree on depends on a couple of factors, like your project’s complexity. If you’d like to know the range of our prices you’ll find all the information you need in our company presentation.",
      },
      {
          title: "How long will my project take?",
          content: "A Jamstack website with 5-7 different design templates takes us between 4-6 weeks of development work (with full-CMS option). Of course, assuming that we have all the design assets provided.",
      },
      {
          title: "How long has Bejamas been around?",
          content: "Although all of us have been roaming the web and marketing world for a long time, we’re a pretty young brand. Together we started as a small web development shop for SMBs in 2017, and Bejamas (as in a shape you see today) was happily born in 2018.",
      },
      {
          title: "Do you have any past jobs to share?",
          content: "With over 30 websites and apps built with static site generators, we do have a bunch of them. Up to browse the full portfolio? Contact our sales team - they’ll be happy to send you a showcase presentation.",
      },
      {
          title: "Do you have your own designers?",
          content: "Yes we do!",
      },
  ],
};

const styles = {
    bgColor: 'trasparent',
    titleTextColor: "#000",
    rowTitleColor: "#000",
    rowContentColor: '#3c4856c2',
    rowContentTextSize: '20px',
    rowContentPaddingTop: '37px',
    rowContentPaddingBottom: '37px',
    arrowColor: "#bdbdbd",
};

const config = {
    // animate: true,
    arrowIcon: "+",
    // tabFocus: true
};


export default function FAQ() {
  return <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>;
}