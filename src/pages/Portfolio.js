import React from "react";
import myProjects from "../components/myprojects.json"

import Project from "../components/Project"
import CarouselButtons from "../components/carouselbuttons"

function Portfolio() {
  return (
    <div className="container">
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        </ol>
        <div class="carousel-inner">
          
          <Project />
          <CarouselButtons />
        </div>
      </div>
    </div>
  )
}

export default Portfolio;