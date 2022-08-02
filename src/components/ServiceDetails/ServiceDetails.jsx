import React from 'react'
import './ServiceDetails.css'


const ServiceDetails = ({service}) => {
  return (
    <div className="col-md-4 text-center">
      <img style={{height: '50px'}} src={service.img} alt=""/>
      <h5 className="mt-4 mb-4 name">{service.name}</h5>
      <p className="description">{service.description}</p>
      <p className="benefits">Business Benefits -{service.benefit}</p>

    </div>
  )
}

export default ServiceDetails;