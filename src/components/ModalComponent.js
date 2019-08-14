import React from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import { FaTimes } from 'react-icons/fa'

const ModalComponent = ({ show, handleClose, image, title, subtitle, index }) => {
  
  return (
    <Modal
      show={ show }
      animation
      className="portfolio-modal"
      id={ `portfolioModal1${ index }` }
      tabIndex="-1"
    >
      <div className="close-modal" onClick={ handleClose }>
        <div className="lr">
          <div className="rl"></div>
        </div>
      </div>
      <Container>
        <Row>
          <Col lg={ 8 } className="mx-auto">
            <Modal.Body>
              <h2 className="text-uppercase">Project Name</h2>
              <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
              <img className="img-fluid d-block mx-auto" src={ image } alt="" />
              <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
              <ul className="list-inline">
                <li>Date: January 2017</li>
                <li>Client: { title }</li>
                <li>Category: { subtitle }</li>
              </ul>
              <Button variant="primary" className="text-white" onClick={ handleClose }>
                <FaTimes /> Close Project
              </Button>
            </Modal.Body>
          </Col>
        </Row>
      </Container>
    </Modal>
  )
}

export default ModalComponent
