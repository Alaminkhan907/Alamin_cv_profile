import React, { useContext, useState } from "react";
import "./Portfolio.css";
import "swiper/css";
import car from "../../img/Car.png";
import doctor from "../../img/doctor.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import PortfolioDetails from "../PortfolioDetails/PortfolioDetails";


const portfolioData = [
  {
    img: car,
    name: 'Car Service',
    details: 'Technology uses for this project is frontend - react , css, html , bootstrap and backend - mongodb , expressJs , cors , middleware to make this site live heroku and firebase used for login and make secure and simple website security',
    frontend:'Front-end Technology :HTML , CSS , BOOTSTRAP , REACT_JS ',
    backend:'Back-end Technology : NodeJs ,MongoDB ,ExpressJs , Cors ,Firebase ,Heroku',
    link1: 'https://github.com/Alaminkhan907/car-service',
    link2: 'https://github.com/Alaminkhan907/car_service_server',
    link3: 'https://genius-car-service-cee48.web.app/',
  },
  {
    img: doctor,
    name: "Dental doctor's service",
    details: 'This website allow patents to take appointments online.Showing available service and closest date to take appointment.Users are secure to login and personal data ans login protected by different technology.',
    frontend:'Front-end Technology :HTML , CSS , BOOTSTRAP , REACT_JS ',
    backend:'Back-end Technology : NodeJs ,MongoDB ,ExpressJs , Cors ,Firebase',
    link1: 'https://github.com/Alaminkhan907/Dental_Service_project',
    link2: '',
    link3: '',
  }
  
]

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div>
      <div className="portfolio" id="portfolio">
        {/* heading */}
        <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
        <span>Portfolio</span>
      </div>
      <div className="d-flex justify-content-center img container">

        <div className=" w-80 row mt-2 pt-1">
          {
            portfolioData.map(portfolio => <PortfolioDetails portfolio={portfolio}>Button</PortfolioDetails>)
          }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
