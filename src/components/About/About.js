import React from "react";
import "./About.css";
import photo from "../../img/personal-profile.svg";
const About = () => {
  return (
    <div className="first">
      <div className="container-about">
        <div className="left-side">
          <img className="left-photo" src={photo} alt="" />
        </div>
        <div className="right-side">
          <h3>MD AL AMIN KHAN</h3>
          <h6>Full stack MERN developer</h6>
          <small>
            I am passionate about solving problems through with desire for
            continuous improvement. Throughout my learning, I have been always
            curious to learn more from each sources to justify my intellectual
            curiosity. However, I will continue educating myself to ensure
            smooth digital services with dedication and improvements.
          </small>
          <div className="table-right">
            <table id="customers">
              <tr>
                <td>Name </td>
                <td>| MD AL AMIN KHAN</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>| Still Unmarried</td>
              </tr>

              <tr>
                <td>Resident</td>
                <td>| Estonia</td>
              </tr>
              <tr>
                <td>City</td>
                <td>| Tallinn</td>
              </tr>
            </table>
            <table id="customers">
              <tr>
                <td>Email </td>
                <td>| alaminkhan907@gmail.com</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>| 58781196</td>
              </tr>

              <tr>
                <td>Education</td>
                <td>| Bachelor of Science</td>
              </tr>
              <tr>
                <td>Subject</td>
                <td>| Inteagreated Engineering</td>
              </tr>
            </table>

            <button className="button n-button">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
