import React from 'react'
import { Row, Col } from 'react-bootstrap'

const SectionHeader = ({ title, subtitle }) => (
  <Row>
    <Col lg={ 12 } className="text-center">
      <h2 className="section-heading text-uppercase">{ title }</h2>
      <h3 className="section-subheading text-muted">{ subtitle }</h3>
    </Col>
  </Row>
)

export default SectionHeader
