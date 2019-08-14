import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import SectionHeader from './SectionHeader'

const Contact = () => (
  <section className="page-section" id="contact">
    <Container>
      <SectionHeader
        title='Contact Us'
        subtitle='Lorem ipsum dolor sit amet consectetur.'
      />
      <Row>
        <Col lg={ 12 }>
          <Form id="contactForm" name="sentMessage" noValidate="novalidate">
            <Row>
              <Col md={ 6 }>
                <Form.Group>
                  <Form.Control id="name" type="text" placeholder="Your Name *" required data-validation-required-message="Please enter your name." />
                  <p className="help-block text-danger"></p>
                </Form.Group>
                <Form.Group>
                  <Form.Control id="email" type="email" placeholder="Your Email *" required data-validation-required-message="Please enter your email address." />
                  <p className="help-block text-danger"></p>
                </Form.Group>
                <Form.Group>
                  <Form.Control id="phone" type="tel" placeholder="Your Phone *" required data-validation-required-message="Please enter your phone number." />
                  <p className="help-block text-danger"></p>
                </Form.Group>
              </Col>
              <Col md={ 6 }>
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </Col>
              <div className="clearfix"></div>
              <Col lg={ 12 } className="text-center">
                <div id="success"></div>
                <Button id="sendMessageButton" type="submit" variant="primary" size="xl" className="text-uppercase">Send Message</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Contact
