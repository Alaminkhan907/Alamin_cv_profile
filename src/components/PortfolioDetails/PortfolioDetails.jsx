import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const PortfolioDetails = ({ portfolio }) => {
  const { img, name, details, frontend, backend, others, link1, link2, link3 } = portfolio;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="col-md-4 text-center mt-4">
      <img onClick={openModal} src={img} className="img-responsive img-rounded" alt='' width="100%" height="100%" />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-header">
            <h5 class=" text-center" id="exampleModalLabel">{name}</h5>

          </div>
          <div class="modal-body">
            <img className="img-fluid" src={img} alt={name} />
            <p>{details}</p>
            <p>{frontend}</p>
            <p>{backend}</p>
            <p>{others}</p>
          </div>
        </div>
        <div className="text-center mt-4 d-flex flex-row justify-content-around">
          <div><a target="_blank" type='button' className='button n-button text-decoration-none' href={link1} target="_blank" >Client</a></div>
          <div><a target="_blank" type='button' className='button n-button text-decoration-none' href={link2} target="_blank" >Server</a></div>
          <div><a target="_blank" type='button' className='button n-button text-decoration-none' href={link3} target="_blank" >Live</a></div>
        </div>
      </Modal>
    </div>
  )
};

export default PortfolioDetails;