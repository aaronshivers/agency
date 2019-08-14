import React from 'react'

const TimelineItem = ({ image, date, heading, body, index }) => (
    
  <li className={ index % 2 === 1 ? 'timeline-inverted' : undefined }>
    <div className="timeline-image">
      <img className="rounded-circle img-fluid" src={ image } alt="" />
    </div>
    <div className="timeline-panel">
      <div className="timeline-heading">
        <h4>{ date }</h4>
        <h4 className="subheading">{ heading }</h4>
      </div>
      <div className="timeline-body">
        <p className="text-muted">{ body }</p>
      </div>
    </div>
  </li>
)

export default TimelineItem
