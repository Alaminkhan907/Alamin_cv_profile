import React, { useContext } from "react";
import "./Intro.css";
import "./index.css";
import "./index";
import table from "../../img/table.svg";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  <script src="index.js"></script>;
  return (
    <div className="Intro container" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <div class="home__data">
            <h1 class="home__title">
              <span class="topText">I create</span>
              <span class="textGradient noAfter animationRotateText">
                <span class="word">successful</span>
                <span class="word">converting</span>
                <span class="word">functional</span>
                <span class="word">lovable</span>
                <span class="word">engaging</span>
                <span class="word">memorable</span>
              </span>
              <strong class="bottomText">web experience</strong>
            </h1>
          </div>
        </div>
        {/* social icons */}
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
      {/* right image side */}
      <div className="i-right">
        <img src={table} alt="" />
        {/* animation */}
      </div>
    </div>
  );
};

export default Intro;
