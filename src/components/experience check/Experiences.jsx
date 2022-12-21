import React from "react";
import "./experience.css";
import { BsBootstrapFill } from "react-icons/bs";
import { FaHtml5, FaJava, FaGithub, FaFigma } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import {
  SiCss3,
  SiMysql,
  SiVisualstudio,
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

const Experiences = () => {
  return (
    <section id="experience">
      <h3 id="experience-header">Skills I developed</h3>
      <div className="container-experience container">
        <div className="experience-frontend">
          <div className="containt-experience">
            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <FaHtml5 className="html-icon" size={30} />
                  <h5>HTML</h5>
                </div>
              </div>
            </article>

            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <SiCss3 className="css-icon" size={30} />
                  <h5>CSS</h5>
                </div>
              </div>
            </article>

            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <IoLogoJavascript className="js-icon" size={30} />
                  <h5>JavaScript</h5>
                </div>
              </div>
            </article>
            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <SiTypescript className="js-icon" size={30} />
                  <h5>TypeScript</h5>
                </div>
              </div>
            </article>

            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <RiReactjsLine className="react-icon" size={30} />
                  <h5>ReactJS</h5>
                </div>
              </div>
            </article>
            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <SiRedux className="react-icon" size={30} />
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
                  <SiMongodb className="java-icon" size={30} />
                  <h5>MongoDB</h5>
                </div>
              </div>
            </article>

            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <SiNodedotjs className="boot-icon" size={30} />
                  <h5>Node JS</h5>
                </div>
              </div>
            </article>

            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <SiMysql className="mongo-icon" size={30} />
                  <h5>My Sql</h5>
                </div>
              </div>
            </article>

            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <TbApi className="node-icon" size={30} />
                  <h5>Rest API</h5>
                </div>
              </div>
            </article>
            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <SiGraphql className="node-icon" size={30} />
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
                  <FaGithub className="html-icon" size={30} />
                  <h5>Github</h5>
                </div>
              </div>
            </article>

            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <FaFigma className="css-icon" size={30} />
                  <h5>Figma</h5>
                </div>
              </div>
            </article>

            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <SiJsonwebtokens className="js-icon" size={30} />
                  <h5>JWT</h5>
                </div>
              </div>
            </article>

            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <SiFirebase className="react-icon" size={30} />
                  <h5>Firebase</h5>
                </div>
              </div>
            </article>
            <article className="experience-details">
              <div>
                <div className="logo-name">
                  <SiWebpack className="react-icon" size={30} />
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
