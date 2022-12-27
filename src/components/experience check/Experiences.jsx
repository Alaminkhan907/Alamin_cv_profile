import React, { useContext } from "react";
import "./experience.css";

import { FaHtml5, FaGithub, FaFigma } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import {
  SiCss3,
  SiMysql,
  SiRedux,
  SiTypescript,
  SiMongodb,
  SiNodedotjs,
  SiJsonwebtokens,
  SiFirebase,
  SiGraphql,
  SiWebpack,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { themeContext } from "../../Context";

const Experiences = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section id="experience">
      <h3 id="experience-header">Skills I developed</h3>
      <div className="container-experience container">
        <div className="experience-frontend">
          <div className="containt-experience">
            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <FaHtml5
                    style={{ color: darkMode ? "white" : "" }}
                    className="html-icon"
                    size={30}
                  />
                  <h5>HTML</h5>
                </div>
              </div>
            </article>

            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <SiCss3
                    style={{ color: darkMode ? "white" : "" }}
                    className="css-icon"
                    size={30}
                  />
                  <h5>CSS</h5>
                </div>
              </div>
            </article>

            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <IoLogoJavascript
                    style={{ color: darkMode ? "white" : "" }}
                    className="js-icon"
                    size={30}
                  />
                  <h5>JavaScript</h5>
                </div>
              </div>
            </article>
            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <SiTypescript
                    style={{ color: darkMode ? "white" : "" }}
                    className="js-icon"
                    size={30}
                  />
                  <h5>TypeScript</h5>
                </div>
              </div>
            </article>

            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <RiReactjsLine
                    style={{ color: darkMode ? "white" : "" }}
                    className="react-icon"
                    size={30}
                  />
                  <h5>ReactJS</h5>
                </div>
              </div>
            </article>
            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <SiRedux
                    style={{ color: darkMode ? "white" : "" }}
                    className="css-icon"
                    size={30}
                  />
                  <h5>Redux</h5>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="experience-backend">
          <div className="containt-experience">
            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <SiMongodb
                    style={{ color: darkMode ? "white" : "" }}
                    className="java-icon"
                    size={30}
                  />
                  <h5>MongoDB</h5>
                </div>
              </div>
            </article>

            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <SiNodedotjs
                    style={{ color: darkMode ? "white" : "" }}
                    className="boot-icon"
                    size={30}
                  />
                  <h5>Node JS</h5>
                </div>
              </div>
            </article>

            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <SiMysql
                    style={{ color: darkMode ? "white" : "" }}
                    className="css-icon"
                    size={30}
                  />
                  <h5>My Sql</h5>
                </div>
              </div>
            </article>

            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <TbApi
                    style={{ color: darkMode ? "white" : "" }}
                    className="node-icon"
                    size={30}
                  />
                  <h5>Rest API</h5>
                </div>
              </div>
            </article>
            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <SiGraphql
                    style={{ color: darkMode ? "white" : "" }}
                    className="html-icon"
                    size={30}
                  />
                  <h5>GraphQL</h5>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="experience-frontend">
          <div className="containt-experience">
            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <FaGithub
                    style={{ color: darkMode ? "white" : "" }}
                    className="html-icon"
                    size={30}
                  />
                  <h5>Github</h5>
                </div>
              </div>
            </article>

            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <FaFigma
                    style={{ color: darkMode ? "white" : "" }}
                    className="css-icon"
                    size={30}
                  />
                  <h5>Figma</h5>
                </div>
              </div>
            </article>

            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <SiJsonwebtokens
                    style={{ color: darkMode ? "white" : "" }}
                    className="js-icon"
                    size={30}
                  />
                  <h5>JWT</h5>
                </div>
              </div>
            </article>

            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <SiFirebase
                    style={{ color: darkMode ? "white" : "" }}
                    className="react-icon"
                    size={30}
                  />
                  <h5>Firebase</h5>
                </div>
              </div>
            </article>
            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <SiWebpack
                    style={{ color: darkMode ? "white" : "" }}
                    className="css-icon"
                    size={30}
                  />
                  <h5>Webpack</h5>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
