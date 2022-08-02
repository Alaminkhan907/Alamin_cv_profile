import React, { useContext } from "react";
import "./Services.css";
import { themeContext } from "../../Context";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import fluoride from "../../img/fluoride.png";
import cavity from "../../img/cavity.png";
import whitening from "../../img/whitening.png"

const serviceData=[
  {
      name:'Fluoride Treatment',
      img:fluoride,

  },
  {
      name:'Cavity Filling',
      img:cavity,

  },
  {
      name:'Teeth Whitening',
      img:whitening,

  },
  {
    name:'Fluoride Treatment',
    img:fluoride,

},
{
    name:'Cavity Filling',
    img:cavity,

},
{
  name:'Cavity Filling',
  img:cavity,

}
]

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
    <div className="services" id="services">
      {/* left side */}
      <div className="portfolio  ">
        {/* heading */}
      <span style={{color: darkMode?'white': ''}}>My Awesome</span>
      <span>Services</span>
      </div>
      {/* right */}
      
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-2 mb-2 pt-5">
            {
                serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
            }
        </div>
      </div>
    </div>
  );
};

export default Services;
