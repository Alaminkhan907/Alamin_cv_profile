import React, { useContext, useState } from "react";
import "./Portfolio.css";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import PortfolioDetails from "../PortfolioDetails/PortfolioDetails";


const portfolioData = [
  {
    img: Sidebar,
    name: 'Sidebar',
    details: 'Technology uses for this project is frontend - react , css, html , bootstrap and backend - mongodb , expressJs , cors , middleware to make this site live heroku and firebase used for login and make secure and simple website security',
    frontend:'Front-end Technology :',
    backend:'Back-end Technology :',
    others:'Others Technology',
    link1: 'https://google.com',
    link2: '',
    link3: '',
  },
  {
    img: Ecommerce,
    name: 'E-commerce',
    details: 'Node ,js , React',
    link: ''
  },
  {
    img: MusicApp,
    name: 'Music app',
    details: 'API , react , NodeJs',
    link: ''
  },
  {
    img: HOC,
    name: 'HOC',
    details: '',
    link: ''
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
