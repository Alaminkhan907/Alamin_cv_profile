import React, { useContext } from "react";
import './Info.css';
import photo from '../../img/alamin.svg'
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";

const Info = () => {
const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div >
        <main style={{height: '85vh'}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
        <h2 style={{ color: darkMode ? "white" : "" }}>Hi i am Alamin Khan<br/> a Full-stack web developer</h2>
        <p>love to work with you with intensive skills of MERN stack </p>
        <div className="i-icons">
          <a href="https://github.com/Alaminkhan907"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/alamin-khan-907/"><img src={LinkedIn} alt="" /></a>
          <a href="https://www.instagram.com/dreary_alo/"><img src={Instagram} alt="" /></a>
        </div>
        </div>
        <div className="col-md-6 text-center">
            <img src={photo} alt="" className="img-fluid"/>
        </div>
        </main>
    </div>
  )
}

export default Info