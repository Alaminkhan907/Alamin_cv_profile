import React, { useContext } from "react";
import "./Intro.css";
import "./index.css";
import "./index.js";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro container" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
        <div class="home__data">
            <h1 class="home__title">
                <span class="topText">I create</span>
                <span class="textGradient noAfter animationRotateText">
                    <span class='word'>successful</span>
                    <span class='word'>converting</span>
                    <span class='word'>functional</span>
                    <span class='word'>lovable</span>
                    <span class='word'>engaging</span>
                    <span class='word'>memorable</span>
                </span>
                <strong class="bottomText">web experience</strong>
            </h1> 
        </div>
        </div>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={boy} alt="" />
        {/* animation */}
      </div>
    </div>
  );
};

export default Intro;
