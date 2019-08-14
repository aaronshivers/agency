import React from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import PortfolioGridItem from './PortfolioGridItem'
import full1 from '../assets/images/portfolio/01-full.jpg'
import full2 from '../assets/images/portfolio/02-full.jpg'
import full3 from '../assets/images/portfolio/03-full.jpg'
import full4 from '../assets/images/portfolio/04-full.jpg'
import full5 from '../assets/images/portfolio/05-full.jpg'
import full6 from '../assets/images/portfolio/06-full.jpg'
import thumb1 from '../assets/images/portfolio/01-thumbnail.jpg'
import thumb2 from '../assets/images/portfolio/02-thumbnail.jpg'
import thumb3 from '../assets/images/portfolio/03-thumbnail.jpg'
import thumb4 from '../assets/images/portfolio/04-thumbnail.jpg'
import thumb5 from '../assets/images/portfolio/05-thumbnail.jpg'
import thumb6 from '../assets/images/portfolio/06-thumbnail.jpg'

const gridData = [
  {
    image: full1,
    thumbnail: thumb1,
    title: 'threads',
    subtitle: 'illustration'
  }, {
    image: full2,
    thumbnail: thumb2,
    title: 'explore',
    subtitle: 'graphic design'
  }, {
    image: full3,
    thumbnail: thumb3,
    title: 'finish',
    subtitle: 'identity'
  }, {
    image: full4,
    thumbnail: thumb4,
    title: 'lines',
    subtitle: 'branding'
  }, {
    image: full5,
    thumbnail: thumb5,
    title: 'southwest',
    subtitle: 'website design'
  }, {
    image: full6,
    thumbnail: thumb6,
    title: 'window',
    subtitle: 'photograpy'
  }
]

const PortfolioGrid = () => {
  return (
    <>
      <section className="bg-light page-section" id="portfolio">
        <Container>
          <Row className="row">
            <Col lg={ 12 } className="text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </Col>
          </Row>
          <Row>
            {
              gridData.map((item, i) => (
                <PortfolioGridItem key={ i } index={ i } { ...item } />
              ))
            }
          </Row>
        </Container>
      </section>
    </>
  )
}

export default PortfolioGrid
