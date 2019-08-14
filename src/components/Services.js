import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaCircle, FaLock, FaShoppingCart, FaLaptop } from 'react-icons/fa'
import SectionHeader from './SectionHeader'

const Header = () => (
  <section className="page-section" id="services">
    <Container>
      <SectionHeader
        title='Services'
        subtitle='Lorem ipsum dolor sit amet consectetur.'
      />
      <Row className="text-center">
        <Col md={ 4 }>
          <span className="fa-4x fa-stack">
            <FaCircle
              className="text-primary fas fa-stack-2x"
            />
            <FaShoppingCart
              className="fas fa-stack-1x text-white"
            />
          </span>
          <h4 className="service-heading">E-Commerce</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </Col>
        <Col md={ 4 }>
          <span className="fa-4x fa-stack">
            <FaCircle
              className="text-primary fas fa-stack-2x"
            />
            <FaLaptop
              className="fas fa-stack-1x text-white"
            />
          </span>
          <h4 className="service-heading">Responsive Design</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </Col>
        <Col md={ 4 }>
          <span className="fa-4x fa-stack">
            <FaCircle
              className="text-primary fas fa-stack-2x"
            />
            <FaLock
              className="fas fa-stack-1x text-white"
            />
          </span>
          <h4 className="service-heading">Web Security</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </Col>
      </Row>
    </Container>
  </section>

)

export default Header
