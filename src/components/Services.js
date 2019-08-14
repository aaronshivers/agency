import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { FaCircle, FaLock, FaShoppingCart, FaLaptop } from 'react-icons/fa'
import SectionHeader from './SectionHeader'
import ServiceItem from './ServiceItem'

const serviceData = [
  {
    icon: <FaShoppingCart className="fas fa-stack-1x text-white" />,
    title: 'E-Commerce',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
  }, {
    icon: <FaLaptop className="fas fa-stack-1x text-white"/>,
    title: 'Responsive Design',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
  }, {
    icon: <FaLock className="fas fa-stack-1x text-white"/>,
    title: 'Web Security',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
  }
]

const Services = () => (
  <section className="page-section" id="services">
    <Container>
      <SectionHeader
        title='Services'
        subtitle='Lorem ipsum dolor sit amet consectetur.'
      />
      <Row className="text-center">
        {
          serviceData.map((item, i) => (
            <ServiceItem key={ i } { ...item } />
          ))
        }
      </Row>
    </Container>
  </section>

)

export default Services
