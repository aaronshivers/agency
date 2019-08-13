import React from 'react'
// import { Container } from 'react-bootstrap'
import creativeMarket from '../assets/images/logos/creative-market.jpg'
import designmodo from '../assets/images/logos/designmodo.jpg'
import envato from '../assets/images/logos/envato.jpg'
import themeforest from '../assets/images/logos/themeforest.jpg'

const Clients = () => (
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="#">
            <img className="img-fluid d-block mx-auto" src={ creativeMarket } alt="" />
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#">
            <img className="img-fluid d-block mx-auto" src={ designmodo } alt="" />
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#">
            <img className="img-fluid d-block mx-auto" src={ envato } alt="" />
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#">
            <img className="img-fluid d-block mx-auto" src={ themeforest } alt="" />
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Clients
