import React from "react";
import frontend from "../../img/front.png";
import backend from "../../img/database.png";
import configuration from "../../img/settings.png";
import quality from "../../img/quality.png";
import design from "../../img/design.png";
import api from "../../img/api.png";

const Servicess = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting\
    industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    {
      id: 1,
      name: "Front-End Development",
      img: frontend,
      description:
        "I have created awesome front end web application with HTML CSS/SCSS ,Bootstrap JavaScript , NodeJs and reactJs",
      benefit: "Quick  , Responsive  and User-driven result",
    },
    {
      id: 2,
      name: "Back-End Development",
      img: backend,
      description:
        "Proficiently handled application which i run on server main goal is function seamlessly and fulfill customer expectations",
      benefit: "Less cost with enhanced capacity on main focused function ",
    },
    {
      id: 3,
      name: "API Integration",
      img: api,
      description:
        "With adequate knowledge with API integration i develop smooth and seamless function",
      benefit: " Great application with higher performance",
    },
    {
      id: 4,
      name: "Database Configuration",
      img: configuration,
      description:
        "I have a great understanding of linking database with back-end language",
      benefit: "Easy updatable data with advance search options",
    },
    {
      id: 5,
      name: "Quality Analysis",
      img: quality,
      description:
        "My main priority is always delivery highest quality of product to my customer without bugs ,errors and harmful element",
      benefit: "Application safety without unexpected breakdown",
    },
    {
      id: 6,
      name: "UI/UX Design",
      img: "https://ibb.co/kyL6mpJ",
      description:
        "With experience of different type of design applications i can ensure height experiences with user friendly design ",
      benefit: "Responsive and user friendly design",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.img}
                  <div className="services__box-header">{info.name}</div>
                  <div className="services__box-p">{info.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicess;
