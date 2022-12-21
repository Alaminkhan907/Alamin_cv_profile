import React, { useContext } from "react";
import "./ServiceDetails.css";
import { themeContext } from "../../Context";

const ServiceDetails = ({ service }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="row col-4 bgMain">
      <div className="services__box ">
        <img style={{ height: "50px" }} src={service.img} alt="" />
        <h4>{service.name}</h4>
        <p style={{ color: darkMode ? "white" : "" }} className="description">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
