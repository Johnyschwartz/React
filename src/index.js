import React from 'react';
import ReactDOM from 'react-dom/client';
import Navabr from "./components/Navbar"

import "./style.css"
import one from "./images/download.jpeg"

const root=ReactDOM.createRoot(document.getElementById("root"))


function Photo(){
  return(
    <div className="imag">
      <div>
        <img src={one}></img>
        <p>This is a beautiful mountain
           located europe as well as in sewis sakj 
           sjcjc johny schwartz 
        </p>
      </div>
      <div>
        <img src={one}></img>
        <p>This is a beautiful mountain
           located europe as well as in sewis sakj 
           sjcjc johny schwartz 
        </p>
      </div>
      <div>
        <img src={one}></img>
        <p>This is a beautiful mountain
           located europe as well as in sewis sakj 
           sjcjc johny schwartz 
        </p>
      </div>
     
    </div>
  )
}

function About(){
  return(
  <div className="about">
  <h1>About Us</h1>
  <p>dndnkn dkndknk kdnkndkn kdnknd</p>
  </div>
  )
}

function Footer(){
  return(
    <div className="head">
    <div className="foot">
      <div>
      <ul>
        <li>contact us</li>
        <li>6380496579</li>
        <li>johnyschwartz4@gmail.com</li>       
      </ul>
      </div>
    </div>
    </div>
  )
}

root.render(
  <div>
    <Navabr></Navabr>
    <Photo></Photo>
    <About></About>
    <Footer></Footer>
  </div>
)
  