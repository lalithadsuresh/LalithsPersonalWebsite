import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const ProjectCard = ({ title, description, imgUrl, modalContent }) => {
  const [modalShow, setModalShow] = useState(false);

  

  return (
    <>
      <Col sm={6} md={4}>
        <div className="proj-imgbx" onClick={() => setModalShow(true)}>
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      <Modal
        show={modalShow}
        size="xl"
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header class = "modal-header" closeButton>
          <Modal.Title class = "modal-text" id="contained-modal-title-vcenter">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalContent}
        </Modal.Body>
        <Modal.Footer>
          <Button className="button-modal" onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};