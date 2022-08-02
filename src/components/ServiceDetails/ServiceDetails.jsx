import React from 'react'


const ServiceDetails = ({service}) => {
  return (
    <div className="col-md-4 text-center">
      <img style={{height: '50px'}} src={service.img} alt=""/>
      <h5 className="mt-4 mb-4">{service.name}</h5>
      <p className="text-secondary">lorem ipsum dolor sit amet, consectetur adip dolor sit amet, consectetur adip</p>

    </div>
  )
}

export default ServiceDetails;