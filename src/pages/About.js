import React from "react";
import image from "./images/najuasaad.jpg"

function About() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-5">
          <img 
            alt="Gorgeous Coder" 
            src ={image}
            className="rounded-circle my-5"
          ></img>
        </div>
        <div className="col-8 text-center orange">
          Hi, I'm Najua! <br></br><span className="yellow">(It's pronounces NEJ-wuh) </span>
        </div>
        <div className="col-8 text-center mt-3">
          <p>
            I am a full-stack developer with experience with HTML, CSS, JS, Bootstrap, Node, Express, MySQL, MongoDB, React, and MERN. 
          </p>
          <p>
            I really love working with databases, React, and front end style. I recently completed the University of Minnesota's coding program. I'm currently learning more about creating functional apps for mobile devices in my spare time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;