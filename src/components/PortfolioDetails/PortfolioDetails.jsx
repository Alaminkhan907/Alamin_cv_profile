import React from 'react'

const PortfolioDetails = ({portfolio}) => {
  return (
   <div className="col-md-4 text-center mt-4">
      <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img src={portfolio.img} className="img-responsive img-rounded" alt='' width="100%" height="100%" />
      </a>
      <div className="modal fade" id="exampleModal" tabindex="-1" >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center" id="exampleModalLabel">Image heading</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src={portfolio.img} alt="" width="80%" height="80%"/>
              <p>This section describe the photo about what is going on there and son on</p>
              <p> click this link</p>
            </div>
          </div>
        </div>
      </div>
  </div> 
  )
}

export default PortfolioDetails