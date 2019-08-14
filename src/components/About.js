import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionHeader from './SectionHeader'
import TimelineItem from './TimelineItem'
import img1 from '../assets/images/about/1.jpg'
import img2 from '../assets/images/about/2.jpg'
import img3 from '../assets/images/about/3.jpg'
import img4 from '../assets/images/about/4.jpg'

const timelineData = [
  {
    image: img1,
    date: '2009-2011',
    heading: 'Our Humble Beginnings',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
  }, {
    image: img2,
    date: 'March 2011',
    heading: 'An Agency is Born',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
  }, {
    image: img3,
    date: 'December 2012',
    heading: 'Transition to Full Service',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
  }, {
    image: img4,
    date: 'July 2014',
    heading: 'Phase Two Expansion',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
  }
]

const About = () => (
  <section className="page-section" id="about">
    <Container>
      <SectionHeader
        title='About'
        subtitle='Lorem ipsum dolor sit amet consectetur.'
      />
      <Row className="row">
        <Col lg={ 12 }>
          <ul className="timeline">
            {
              timelineData.map((item, i) => (
                <TimelineItem key={ i } index={ i } { ...item } />
              ))
            }
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Be Part<br />Of Our<br />Story!</h4>
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </section>
)

export default About
