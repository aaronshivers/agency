import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import img1 from '../assets/images/about/1.jpg'
import img2 from '../assets/images/about/2.jpg'
import img3 from '../assets/images/about/3.jpg'

const Team = () => (
  <section className="bg-light page-section" id="team">
    <Container className="container">
      <Row>
        <Col lg={ 12 } className="text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </Col>
      </Row>
      <Row>
        <Col sm={ 4 }>
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={ img1 } alt="" />
            <h4>Kay Garland</h4>
            <p className="text-muted">Lead Designer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col sm={ 4 }>
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={ img2 } alt="" />
            <h4>Larry Parker</h4>
            <p className="text-muted">Lead Marketer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col sm={ 4 }>
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={ img3 } alt="" />
            <h4>Diana Pertersen</h4>
            <p className="text-muted">Lead Developer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={ 8 } className="mx-auto text-center">
          <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Team
