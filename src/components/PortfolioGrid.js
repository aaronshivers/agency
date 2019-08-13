import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import { FaPlus, FaTimes } from 'react-icons/fa'
import thumb1 from '../assets/images/portfolio/01-thumbnail.jpg'
import full1 from '../assets/images/portfolio/01-full.jpg'
import thumb2 from '../assets/images/portfolio/02-thumbnail.jpg'
import thumb3 from '../assets/images/portfolio/03-thumbnail.jpg'
import thumb4 from '../assets/images/portfolio/04-thumbnail.jpg'
import thumb5 from '../assets/images/portfolio/05-thumbnail.jpg'
import thumb6 from '../assets/images/portfolio/06-thumbnail.jpg'

const PortfolioGrid = () => {
  const [ show, setShow ] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  useEffect(() => console.log(show), [show])

  return (
    <>
      <section className="bg-light page-section" id="portfolio">
        <Container>
          <Row className="row">
            <Col lg={ 12 } className="text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </Col>
          </Row>
          <Row>
            <Col
              md={ 4 }
              sm={ 6 }
              className="portfolio-item"
              onClick={ handleShow }
            >
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <FaPlus />
                  </div>
                </div>
                <img className="img-fluid" src={ thumb1 } alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Threads</h4>
                <p className="text-muted">Illustration</p>
              </div>
            </Col>
            <Col md={ 4 } sm={ 6 } className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <FaPlus />
                  </div>
                </div>
                <img className="img-fluid" src={ thumb2 } alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Explore</h4>
                <p className="text-muted">Graphic Design</p>
              </div>
            </Col>
            <Col md={ 4 } sm={ 6 } className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <FaPlus />
                  </div>
                </div>
                <img className="img-fluid" src={ thumb3 } alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Finish</h4>
                <p className="text-muted">Identity</p>
              </div>
            </Col>
            <Col md={ 4 } sm={ 6 } className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <FaPlus />
                  </div>
                </div>
                <img className="img-fluid" src={ thumb4 } alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Lines</h4>
                <p className="text-muted">Branding</p>
              </div>
            </Col>
            <Col md={ 4 } sm={ 6 } className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <FaPlus />
                  </div>
                </div>
                <img className="img-fluid" src={ thumb5 } alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Southwest</h4>
                <p className="text-muted">Website Design</p>
              </div>
            </Col>
            <Col md={ 4 } sm={ 6 } className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <FaPlus />
                  </div>
                </div>
                <img className="img-fluid" src={ thumb6 } alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Window</h4>
                <p className="text-muted">Photography</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Modal 
        show={ show }
        animation
        className="portfolio-modal"
        id="portfolioModal1"
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
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
                    <img className="img-fluid d-block mx-auto" src={ full1 } alt="" />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>Date: January 2017</li>
                      <li>Client: Threads</li>
                      <li>Category: Illustration</li>
                    </ul>
                    <Button variant="primary" onClick={ handleClose }>
                      <FaTimes /> Close Project</Button>
                  </Modal.Body>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default PortfolioGrid
