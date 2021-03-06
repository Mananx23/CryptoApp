import React from 'react';
import '../styles/mainLanding/particles.scss'
import Particles from 'react-particles-js';

function Particle(){
    return(
    <div className="main">
      <div className="heading">
        <h1>App Name</h1>
      </div>
   <Particles
  params={{
    particles: {
      color: {
        value: "#ff0505"
      },
      line_linked: {
        color: {
          value: "#ff0505"
        }
      },
      number: {
        value: 50
      },
      size: {
        value: 3
      }
    }
  }}
/>  
    </div>
  

    )};

export default Particle;
