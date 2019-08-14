import React, { useState, useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import ModalComponent from './ModalComponent'

const PortfolioGridItem = ({ image, thumbnail, title, subtitle, index }) => {
  const [ show, setShow ] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Col
        md={ 4 }
        sm={ 6 }
        className="portfolio-item"
        onClick={ handleShow }
      >
        <a className="portfolio-link" data-toggle="modal" href={ `#portfolioModal${ index }` }>
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <FaPlus />
            </div>
          </div>
          <img className="img-fluid" src={ `${ thumbnail }` } alt="" />
        </a>
        <div className="portfolio-caption">
          <h4>{ title }</h4>
          <p className="text-muted">{ subtitle }</p>
        </div>
      </Col>

      <ModalComponent
        show={ show }
        handleClose={ handleClose }
        image={ image }
        index={ index }
        title={ title }
        subtitle={ subtitle }
      />
    </>
  )
}

export default PortfolioGridItem
