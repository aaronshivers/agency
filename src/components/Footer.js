import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const Header = () => (
  <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <Col md={ 4 }>
          <span className="copyright">Copyright &copy; Your Website 2019</span>
        </Col>
        <Col md={ 4 }>
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
        </Col>
        <Col md={ 4 }>
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Header
