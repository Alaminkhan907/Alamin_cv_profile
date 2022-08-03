import React, { useContext } from "react";
import './ServiceDetails.css';
import { themeContext } from "../../Context";


const ServiceDetails = ({service}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="col-md-4 text-center" >
      <img style={{height: '70px'}} src={service.img} alt=""/>
      <h5 className="mt-4 mb-4 name">{service.name}</h5>
      <p style={{ color: darkMode ? "white" : "" }}className="description">{service.description}</p>
     {/* <p className="benefits">Business Benefits -{service.benefit}</p> */}

    </div>
  )
}

export default ServiceDetails;