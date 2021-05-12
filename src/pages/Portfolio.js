import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode, faWindowRestore } from '@fortawesome/free-solid-svg-icons'

function Portfolio() {
  return (
    <div>
      <FontAwesomeIcon icon={faFileCode} />
      <FontAwesomeIcon icon={faWindowRestore} />
    </div>
  )
}

export default Portfolio;