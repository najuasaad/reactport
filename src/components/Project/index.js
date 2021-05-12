import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode, faWindowRestore } from '@fortawesome/free-solid-svg-icons'

function Project(props) {
  return (
    <div className="carousel-item active">
      <img src={props.image} class="d-block w-100" alt={props.project}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>{props.description}</h5>
        <a href={props.repo}><FontAwesomeIcon icon={faFileCode} /></a>
        <a href={props.deployed}><FontAwesomeIcon icon={faWindowRestore} /></a>
      </div>
    </div>
  )
}

export default Project;