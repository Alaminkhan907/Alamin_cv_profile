import React from "react";
import "./project.css";
import { data } from "./Data";

const Project = () => {
  return (
    <section id="project">
      <h5 id="heading"> My Recent </h5> <h2 id="heading"> Project 's</h2>
      <div className="container portfolio-container">
        {" "}
        {data.map(({ id, img, tittle, github, demo }) => {
          return (
            <article className="portfolio-item" key={id}>
              <div className="portfolio-item-img">
                <img style={{ height: "150px" }} src={img} alt="" />
              </div>{" "}
              <h5> {tittle} </h5>{" "}
              <div className="protfolio-item-cta">
                <a href={github} className="btn" target="_blank">
                  www.github.com{" "}
                </a>{" "}
                <a
                  href={demo}
                  className="btn btn-primary sub"
                  target={"_blank"}
                >
                  {" "}
                  Live Demo{" "}
                </a>{" "}
              </div>{" "}
            </article>
          );
        })}{" "}
      </div>{" "}
    </section>
  );
};

export default Project;
