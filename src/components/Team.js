import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TeamMember from './TeamMember'
import img1 from '../assets/images/about/1.jpg'
import img2 from '../assets/images/about/2.jpg'
import img3 from '../assets/images/about/3.jpg'

const memberData = [
  {
    name: 'Kay Garland',
    title: 'Lead Designer',
    image: img1
  }, {
    name: 'Larry Parker',
    title: 'Lead Marketer',
    image: img2
  }, {
    name: 'Diana Pertersen',
    title: 'Lead Developer',
    image: img3
  }
]

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
        {
          memberData.map((member, i) => (
            <TeamMember key={ i } { ...member } />
          ))
        }
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
