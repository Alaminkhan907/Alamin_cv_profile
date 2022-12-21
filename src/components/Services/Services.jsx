import React, { useContext } from "react";
import "./Services.css";
import { themeContext } from "../../Context";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import frontend from "../../img/front.png";
import backend from "../../img/database.png";
import configuration from "../../img/settings.png";
import quality from "../../img/quality.png";
import design from "../../img/design.png";
import api from "../../img/api.png";

const serviceData = [
  {
    name: "Front-End Development",
    img: frontend,
    description:
      "I have created awesome front end web application with HTML CSS/SCSS ,Bootstrap JavaScript , NodeJs and reactJs",
    benefit: "Quick  , Responsive  and User-driven result",
  },
  {
    name: "Back-End Development",
    img: backend,
    description:
      "Proficiently handled application which i run on server main goal is function seamlessly and fulfill customer expectations",
    benefit: "Less cost with enhanced capacity on main focused function ",
  },
  {
    name: "API Integration",
    img: api,
    description:
      "With adequate knowledge with API integration i develop smooth and seamless function",
    benefit: " Great application with higher performance",
  },
  {
    name: "Database Configuration",
    img: configuration,
    description:
      "I have a great understanding of linking database with back-end language",
    benefit: "Easy updatable data with advance search options",
  },
  {
    name: "Quality Analysis",
    img: quality,
    description:
      "My main priority is always delivery highest quality of product to my customer without bugs ,errors and harmful element",
    benefit: "Application safety without unexpected breakdown",
  },
  {
    name: "UI/UX Design",
    img: design,
    description:
      "With experience of different type of design applications i can ensure height experiences with user friendly design ",
    benefit: "Responsive and user friendly design",
  },
];

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services mt-3" id="services">
      {/* left side */}
      <div className="portfolio  ">
        {/* heading */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
      </div>
      {/* right */}

      <div className="">
        <div className="">
          {serviceData.map((service) => (
            <ServiceDetails service={service}></ServiceDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
