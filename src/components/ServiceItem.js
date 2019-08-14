import React from 'react'
import { Col } from 'react-bootstrap'
import { FaCircle } from 'react-icons/fa'

const ServiceItem = ({ icon, title, body }) => (
    
  <Col md={ 4 }>
    <span className="fa-4x fa-stack">
      <FaCircle
        className="text-primary fas fa-stack-2x"
      />
      { icon }
    </span>
    <h4 className="service-heading">{ title }</h4>
    <p className="text-muted">{ body }</p>
  </Col>
)

export default ServiceItem
