import React, { useContext } from "react";
import "./Skills.css";
import { themeContext } from "../../Context";
import app from '../../img/app.png';
import database from '../../img/database.png';
import web from '../../img/web.png';


const Skills = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="services mt-5" id="services">
      {/* left side */}
      <div className="portfolio">
        {/* heading */}
        <span style={{color: darkMode?'white': ''}}>My Awesome</span>
        <span>Skills</span>
      </div>


      <div className="card-group style-div justify-content-center mt-5 pb-5 " >
        <div>
          <img className="card-img-top " src={web} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Front End</h5>
            <p className="card-text">
                <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
            </p>
           
          </div>
        </div>
        <div>
          <img className="card-img-top" src={database} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Back End</h5>
            <p className="card-text">
                <ul>
                    <li>NodeJs</li>
                    <li>ExpressJs</li>
                    <li>MongoDB</li>
                </ul>
            </p>
           
          </div>
        </div>
        <div>
          <img className="card-img-top" src={app} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Others</h5>
            <p className="card-text">
            <ul>
                <li>Git</li>
                <li>Figma</li>
                <li>Firebase</li>
            </ul>
            </p>
          </div>
        </div>
      
      
    </div>
    </div>
  );
};

export default Skills;
