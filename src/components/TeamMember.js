import React from 'react'
import { Col } from 'react-bootstrap'
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const TeamMember = ({ name, title, image }) => (
  <Col sm={ 4 }>
    <div className="team-member">
      <img className="mx-auto rounded-circle" src={ image } alt="" />
      <h4>{ name }</h4>
      <p className="text-muted">{ title }</p>
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
)

export default TeamMember
