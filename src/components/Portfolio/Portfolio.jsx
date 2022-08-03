import React, { useContext } from "react";
import "./Portfolio.css";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import PortfolioDetails from "../PortfolioDetails/PortfolioDetails";


const portfolioData=[
  {
    img:Sidebar,
    name:'Sidebar',
    details:'React, js',
    link:''
  },
  {
    img:Ecommerce,
    name:'E-commerce',
    details:'Node ,js , React',
    link:''
  },
  {
    img:MusicApp,
    name:'Music app',
    details:'API , react , NodeJs',
    link:''
  },
  {
    img:HOC,
    name:'HOC',
    details:'',
    link:''
  }
]

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <div className="portfolio" id="portfolio">
        {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>
      </div>
      <div className="d-flex justify-content-center img container">
        <div className=" w-80 row mt-2 pt-1">
            {
                portfolioData.map(portfolio => <PortfolioDetails portfolio={portfolio}></PortfolioDetails>)
            }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
