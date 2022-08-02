import React from 'react'

const PortfolioDetails = ({portfolio}) => {
  return (
    <div className="col-md-4 text-center mt-4">
      <img style={{height: '150px'}} src={portfolio.img} alt=""/>
     {/* <h5 className="mt-3 mb-1">{portfolio.name}</h5> */}
      {/*<p className="text-secondary">lorem ipsum dolor sit amet, consectetur adip dolor sit amet, consectetur adip</p>*/}
    </div>
  )
}

export default PortfolioDetails