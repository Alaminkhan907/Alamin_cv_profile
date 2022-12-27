import React, { useContext, useEffect, useState } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import "./info.css";
import photo from "../../img/vue.svg";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";

const TEXTS = [
  "JavaScript Developer",
  "React Developer",
  "Redux Developer",
  "Typescript Developer",
  "NodeJS Developer ",
  "MongoDB Developer",
];
const para = [
  "Create Interactive Web Experience ",
  "Create Functional Website",
  "Make Easy To navigate Experience",
  "Keep Simple/Easy to use web Function",
  "Create Responsive WebSite",
  "Keep Secure web data",
];

const Info = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div>
      <main
        style={{ height: "85vh" }}
        className="row d-flex align-items-center"
      >
        <div className="col-md-4 offset-md-1">
          <h2 style={{ color: darkMode ? "white" : "" }}>
            <section>
              <h2>Hi i am Alamin Khan</h2>
              <ReactTextTransition springConfig={presets.wobbly}>
                {TEXTS[index % TEXTS.length]}
              </ReactTextTransition>
            </section>
            <section>
              <ReactTextTransition springConfig={presets.wobbly}>
                {para[index % para.length]}
              </ReactTextTransition>
            </section>
          </h2>
          <div className="i-icons">
            <a href="https://github.com/Alaminkhan907">
              <img src={Github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/alamin-khan-907/">
              <img src={LinkedIn} alt="" />
            </a>
            <a href="https://www.instagram.com/dreary_alo/">
              <img src={Instagram} alt="" />
            </a>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img src={photo} alt="" className="img-fluid" />
        </div>
      </main>
    </div>
  );
};

export default Info;
